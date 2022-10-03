const Condidates = require('../models/condidate');

const checkCondidateIsAdmitted = (req, res, next) => {
  Condidates.findOne({ cin: req.body.cin }).then((admittedCondidate) => {
    if (admittedCondidate) {
      res.admittedCondidate = admittedCondidate;
      next();
      return;
    } else {
      res.status(500).json({
        error: 'Condidate not admitted',
      });
    }
  });
};

module.exports = checkCondidateIsAdmitted;
