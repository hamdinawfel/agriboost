module.exports = function score(totalScore ,yearNumber) {
    let score = 0
    switch (totalScore) {
        case 70:
          score = 30 -((10 - yearNumber)*0.2)
          break;
        case 66:
          score = 28.2 -((10 - yearNumber)*0.2)
          break;
        case 62:
          score =  26.4 -((10 - yearNumber)*0.2)
          break;
        case 60:
          score = 24.6 -((10 - yearNumber)*0.2)
          break;
        case 58: 
          score = 22.8 -((10 - yearNumber)*0.2)
          break;
        case 56:
          score = 21 -((10 - yearNumber)*0.2)
          break;
        case 54:
            score = 19.2 -((10 - yearNumber)*0.2)
          break;
        case 52:
         score = 17.4 -((10 - yearNumber)*0.2)
          break;
        case 50:
         score = 15.6 -((10 - yearNumber)*0.2)
          break;
        case 48:
         score = 13.8 -((10 - yearNumber)*0.2)
          break;
        case 46:
         score = 12 -((10 - yearNumber)*0.2)
          break;
        case 44:
         score = 10.2 -((10 - yearNumber)*0.2)
          break;
        case 40:
         score = 8.4 -((10 - yearNumber)*0.2)
          break;
        case 36:
         score = 6.6 -((10 - yearNumber)*0.2)
          break;
          default:
            score = 0
    }
    return score 
  };

