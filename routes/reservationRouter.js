require('dotenv').config();
const express = require('express');
const Reservations = require('../models/reservation');
const Condidates = require('../models/condidate');
const limiter = require('../middlewares/limiter');
var getSmsApiToken = require('../middlewares/getSmsApiToken');
var sendVerificationCode = require('../middlewares/sendVerificationCode');

const reservationRouter = express.Router();

reservationRouter
  .route('/')
  .post(getSmsApiToken, sendVerificationCode, (req, res, next) => {
    Condidates.findOne({ cin: req.body.cin }).then((condidate) => {
      if (!condidate) {
        res.status(400).json({
          error: 'Something went wrong',
        });
      } else {
        Reservations.findOne({ cin: req.body.cin }).then((reservation) => {
          if (reservation) {
            if (!reservation.isPhoneVerified) {
              Reservations.updateOne(
                { _id: reservation._id },
                { ...req.body, _id: reservation._id }
              )
                .then(() =>
                  res
                    .status(201)
                    .json({ message: 'Please send the sms verification code' })
                )
                .catch((error) => res.status(400).json({ error }));
            } else {
              res.status(500).json({
                error: 'You are already reserved',
              });
            }
          } else {
            const reservation = new Reservations({
              condidate: condidate,
              cin: req.body.cin,
              smsCode: res.smsVerificatioCode,
              phone: req.body.phone,
              trainingPromotion: req.body.trainingPromotion,
            });
            reservation
              .save()
              .then(() => {
                res
                  .status(201)
                  .json({ message: 'Please send the sms verification code' });
              })
              .catch((err) => {
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
  });

module.exports = reservationRouter;
