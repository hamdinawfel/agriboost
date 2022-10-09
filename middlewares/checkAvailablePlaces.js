const Reservations = require('../models/reservation');

const CONDIDATE_PER_PROMOTION = 50;

const checkAvailablePlaces = (req, res, next) => {
  Reservations.find({ trainingPromotion: req.body.trainingPromotion })
    .countDocuments()
    .then((count) => {
      if (count <= CONDIDATE_PER_PROMOTION) {
        next();
      } else {
        res.status(500).json({
          error: 'This Training Promotion is not available',
        });
      }
    });
};

module.exports = checkAvailablePlaces;
