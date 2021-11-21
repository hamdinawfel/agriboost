require("dotenv").config();
const verifyCandidateTime = (req, res, next) => {
  if (parseInt(process.env.REACT_APP_END_SUBMSITTION) >= Date.now()) {
    return next();
  } else {
    return res.status(403).json({ error: "final submission deadline" });
  }
};

module.exports = verifyCandidateTime;
