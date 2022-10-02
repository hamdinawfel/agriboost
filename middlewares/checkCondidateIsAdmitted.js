const AdmittedCondidates = require('../models/condidate');

const checkCondidateIsAdmitted = (req, res, next) => {
  AdmittedCondidates.findOne({ cin: req.body.cin }).then(
    (admittedCondidate) => {
      if (admittedCondidate) {
        res.admittedCondidate = admittedCondidate;
        next();
      } else {
        res.status(500).json({
          error: 'Condidate not admitted',
        });
      }
    }
  );
};

module.exports = checkCondidateIsAdmitted;
