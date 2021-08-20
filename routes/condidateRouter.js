require('dotenv').config()
const express = require('express');
const Condidates = require('../models/condidate');
var authenticate = require('../middlewares/authenticate');
var score = require('../middlewares/score');
var verify = require('../middlewares/verify');

const condidateRouter = express.Router();


condidateRouter.route('/') 
.get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
  Condidates.find({}).skip((req.query.page -1)*10).limit(10)
  .then((condidates) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(condidates);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.post((req, res, next) => {
  Condidates.findOne({cin: req.body.cin})
  .then((condidat) => {
      if (!condidat) {
          var totalScore = 0;
          var criteriaList = [];

          const firstCriteria = {
            question: req.body.criteriaList[0].question,
            answer: req.body.criteriaList[0].answer,
            score: req.body.criteriaList[0].answer === 'firstOption'?36:32
          };
          const secondCriteria = {
            question: req.body.criteriaList[1].question,
            answer: req.body.criteriaList[1].answer,
            score: req.body.criteriaList[1].answer === 'firstOption'?8:0
          };

          const thirdCriteria = {
            question: req.body.criteriaList[2].question,
            answer: req.body.criteriaList[2].answer,
            score: req.body.criteriaList[2].answer === 'firstOption'?8:0
          };
          const fourthCriteria = {
            question: req.body.criteriaList[3].question,
            answer: req.body.criteriaList[3].answer,
            score: 4
          };
          const fifthCriteria = {
            question: req.body.criteriaList[4].question,
            answer: req.body.criteriaList[4].answer,
            score: req.body.criteriaList[4].answer === 'firstOption'?4:0
          };
          const sixthCriteria = {
            question: req.body.criteriaList[5].question,
            answer: req.body.criteriaList[5].answer,
            score: req.body.criteriaList[5].answer === 'firstOption'?10:0
          };
         
          criteriaList=[firstCriteria,secondCriteria, thirdCriteria, fourthCriteria, fifthCriteria, sixthCriteria]
          criteriaList.forEach(element => {
           totalScore += element.score
        })
        const seventhCriteria = {
          question: req.body.criteriaList[6].question,
          answer: req.body.criteriaList[6].answer,
          score: req.body.criteriaList[6].answer === 10?30:score(totalScore, req.body.criteriaList[6].answer)
        };
              const newCondidate = new Condidates({
                cin: req.body.cin,
                fingerPrint : req.body.fingerPrint,
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                birthDay : req.body.birthDay,
                address : req.body.address,
                city : req.body.city,
                village : req.body.village,
                civilStatus : req.body.civilStatus,
                edicationalLevel : req.body.edicationalLevel,
                lastStadyLevel : req.body.lastStadyLevel,
                phone : req.body.phone,
                sexe : req.body.sexe,
                email : req.body.email,
                criteriaList : [...criteriaList, seventhCriteria],
                totalScore : totalScore + seventhCriteria.score
              });
              newCondidate.save()
        .then((condidate) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(condidate);
        }, (err) => next(err))
        .catch((err) => next(err));
      }
      else {
          return res.status(400).json({ cin: "Vous êtes déjà abonné" });
      }
  }, (err) => next(err))
  .catch((err) => next(err));
})
condidateRouter.route('/:condidateId') 
.put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
  Condidates.findByIdAndUpdate(req.params.condidateId, {
    $set: {accepted: req.body.accepted}
}, { new: true })
.then((condidate) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(condidate);
}, (err) => next(err))
.catch((err) => next(err));
})
condidateRouter.route('/count') 
.get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
  Condidates.find({}).countDocuments()
  .then((condidates) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(condidates);
  }, (err) => next(err))
  .catch((err) => next(err));
})
condidateRouter.route('/accepeted') 
.get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
  Condidates.find({ accepted: true}).skip((req.query.page -1)*10).limit(10)
  .then((condidates) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(condidates);
  }, (err) => next(err))
  .catch((err) => next(err));
})
condidateRouter.route('/accepetd/count') 
.get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
  Condidates.find({ accepted: true}).countDocuments()
  .then((condidates) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(condidates);
  }, (err) => next(err)) 
  .catch((err) => next(err));
})
condidateRouter.route('/:condidateCin')
.get((req, res, next) => {
  Condidates.findOne({cin:req.params.condidateCin})
  .then((condidate) => {
    if(!condidate){
      return  res.status(404).json({error:'cin not found'});
    }else{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(condidate);
    }
  })
  .catch((err) => {
    res.status(404).json({error:err})
  });
})
module.exports = condidateRouter;
