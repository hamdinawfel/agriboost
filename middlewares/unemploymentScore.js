module.exports = function unemploymentScore(unemploymentDuration) {
  let score = 0;
  switch (true) {
    case unemploymentDuration < 24: // 24 months : 2 years
      score = 0;
      break;
    case unemploymentDuration < 60 && unemploymentDuration >= 24:
      score = 1;
      break;
    case unemploymentDuration < 96 && unemploymentDuration >= 60:
      score = 2;
      break;
    case unemploymentDuration >= 96:
      score = 3;

      break;
    default:
      score = 0;
  }
  return score;
};
