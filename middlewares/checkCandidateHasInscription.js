const Inscription = require('../models/inscription');

const checkCandidateHasInscription = (req, res, next) => {
  Inscription.findOne({ cin: req.body.cin }).then((inscription) => {
    if (!inscription) {
      next();
    } else {
        res.status(500).json({
            error: `You have already set your sector: ${inscription.sector}`,
        });
    }
  });
};

module.exports = checkCandidateHasInscription;
