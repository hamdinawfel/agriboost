require("dotenv").config();
const verifyReclamationTime = (req, res, next) => {
  if (
    parseInt(process.env.REACT_APP_END_RECLAMATION) >= Date.now() &&
    parseInt(process.env.REACT_APP_END_SUBMSITTION) <= Date.now()
  ) {
    return next();
  } else {
    return res.status(403).json({ error: "reclamation not permitted" });
  }
};

module.exports = verifyReclamationTime;
