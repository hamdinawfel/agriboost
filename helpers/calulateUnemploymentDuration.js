const moment = require("moment");
module.exports = function calulateUnemploymentDuration(
  birthDate,
  lastStadyLevel,
  isCandidateHaveCnss,
  snssDuration,
  isCandidateHavePatente,
  patenteDuration
) {
  let unemploymentDuration = 0;
  
  const minimumWorkAge = 18 * 12;
  unemploymentDuration =
    moment().diff(`${birthDate}`, "months") - minimumWorkAge;
  if (isCandidateHaveCnss === "نعم" && snssDuration) {
    unemploymentDuration = unemploymentDuration - snssDuration;
  }
  if (isCandidateHavePatente === "نعم" && patenteDuration) {
    unemploymentDuration = unemploymentDuration - patenteDuration;
  }
  if (
    moment(`${lastStadyLevel}`).diff(moment(`${birthDate}`), "months") >
    minimumWorkAge
  ) {
    unemploymentDuration =
      unemploymentDuration -
      (moment(`${lastStadyLevel}`).diff(moment(`${birthDate}`), "months") -
        minimumWorkAge);
  }
  return unemploymentDuration;
};
