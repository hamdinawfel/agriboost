const Reservations = require('../models/reservation');

const checkCandidateHasReservation = (req, res, next) => {
  Reservations.findOne({ cin: req.body.cin }).then((reservation) => {
    if (!reservation) {
      next();
    } else {
      if (!reservation.isPhoneVerified) {
        res.status(500).json({
          error: 'Reservation not confirmed',
        });
      } else {
        res.status(500).json({
          error: `You are already have a confirmed reservation: ${reservation.trainingPromotion}`,
        });
      }
    }
  });
};

module.exports = checkCandidateHasReservation;
