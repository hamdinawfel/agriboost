require('dotenv').config();
const express = require('express');
const Reservations = require('../models/reservation');
const limiter = require('../middlewares/limiter');
var getSmsApiToken = require('../middlewares/getSmsApiToken');
var checkCandidateHasReservation = require('../middlewares/checkCandidateHasReservation');
var checkCondidateIsAdmitted = require('../middlewares/checkCondidateIsAdmitted');
var checkAvailablePlaces = require('../middlewares/checkAvailablePlaces');
var sendVerificationCode = require('../middlewares/sendVerificationCode');
var authenticate = require('../middlewares/authenticate');

const reservationRouter = express.Router();

reservationRouter
  .route('/')
  .post(
    checkCandidateHasReservation,
    checkCondidateIsAdmitted,
    checkAvailablePlaces,
    getSmsApiToken,
    sendVerificationCode,
    (req, res, next) => {
      const reservation = new Reservations({
        condidate: res.admittedCondidate,
        smsVerificatioCode: res.smsVerificatioCode,
        cin: req.body.cin,
        phone: req.body.phone,
        trainingPromotion: req.body.trainingPromotion,
      });
      reservation
        .save()
        .then(() => {
          res.status(201).json({
            message:
              'Reservation succesufully saved and waiting to verified by sms code',
          });
        })
        .catch((err) => {
          res.status(500).json({
            error: err,
          });
        });
    }
  );

reservationRouter.route('/confirmation').post((req, res, next) => {
  Reservations.findOne({ cin: req.body.cin }).then((reservation) => {
    if (reservation && reservation.smsVerificatioCode == req.body.smsCode) {
      if (!reservation.isPhoneVerified) {
        reservation.isPhoneVerified = true;
        reservation
          .save()
          .then(() => {
            res.status(201).json({ message: 'Reservation was confirmed' });
          })
          .catch((err) => {
            res.status(500).json({
              error: err,
            });
          });
      } else {
        res.status(500).json({
          error: `This Reservation was already confirmed with this phone number:${reservation.phone}`,
        });
      }
    } else {
      return res.status(403).json({ error: 'Verification code was incorrect' });
    }
  });
});

reservationRouter.route('/count').get((req, res, next) => {
  Reservations.aggregate([
    { $match: { isPhoneVerified: true } },
    {
      $group: {
        _id: '$trainingPromotion',
        reservationsCount: { $sum: 1 },
      },
    },
  ])
    .then((output) => {
      res.status(200).json(output);
    })
    .catch((err) => next(err));
});

module.exports = reservationRouter;
