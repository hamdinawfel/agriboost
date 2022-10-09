const Reservations = require('../models/reservation');

const checkCandidateHasReservation = (req, res, next) => {
  Reservations.findOne({ cin: req.body.cin }).then((reservation) => {
    if (!reservation) {
      next();
    } else {
      if (!reservation.isPhoneVerified) {
        Reservations.findOneAndDelete({ _id: reservation._id })
          .then(() => {
            next();
          })
          .catch((err) => console.log(err));
      } else {
        res.status(500).json({
          error: `You are already have a confirmed reservation: ${reservation.trainingPromotion}`,
        });
      }
    }
  });
};

module.exports = checkCandidateHasReservation;
