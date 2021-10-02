require("dotenv").config();
const express = require("express");
const Condidates = require("../models/condidate");
var authenticate = require("../middlewares/authenticate");
var score = require("../middlewares/score");
var verify = require("../middlewares/verify");
const limiter = require("../middlewares/limiter");

const condidateRouter = express.Router();

const candidateStatus = {
  submitted: "مطلبكم في مرحلة الفرز",
  rejected: "نأسف لعدم قبول مطلبكم",
  waited: "مطلبكم في قائمة الإنتضار",
  initial: "حضي مطلبكم بالقبول مبدئيا",
  final: "حضي مطلبكم بالقبول",
};

condidateRouter
  .route("/")
  .get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Condidates.find({})
      .sort({ totalScore: -1 })
      .skip((req.query.page - 1) * 10)
      .limit(10)
      .then(
        (condidates) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(condidates);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    Condidates.findOne({ cin: req.body.cin })
      .then(
        (condidat) => {
          if (!condidat) {
            var totalScore = 0;
            var criteriaList = [];
            const answerOptions = [
              {
                firstOption: "بطاقة العلاج  المجاني",
                secondOption: "بطاقة علاج ذات التعريفة المنخفظة",
              },
              { firstOption: "نعم", secondOption: "لا" },
              { firstOption: "نعم", secondOption: "لا" },
              {
                firstOption:
                  "مكفول سابقا من أحد مراكز الدفاع والإدماج الإجتماعي",
                secondOption:
                  "متعهد بك سابقا من أحد المراكز المندمجة للشباب و الطفولة",
              },
              { firstOption: "نعم", secondOption: "لا" },
              { firstOption: "نعم", secondOption: "لا" },
            ];

            const firstCriteria = {
              question: req.body.criteriaList[0].question,
              answer:
                req.body.criteriaList[0].answer === "firstOption"
                  ? answerOptions[0].firstOption
                  : answerOptions[0].secondOption,
              score:
                req.body.criteriaList[0].answer === "firstOption" ? 36 : 32,
            };
            const secondCriteria = {
              question: req.body.criteriaList[1].question,
              answer:
                req.body.criteriaList[1].answer === "firstOption"
                  ? answerOptions[1].firstOption
                  : answerOptions[1].secondOption,
              score: req.body.criteriaList[1].answer === "firstOption" ? 8 : 0,
            };

            const thirdCriteria = {
              question: req.body.criteriaList[2].question,
              answer:
                req.body.criteriaList[2].answer === "firstOption"
                  ? answerOptions[2].firstOption
                  : answerOptions[2].secondOption,
              score: req.body.criteriaList[2].answer === "firstOption" ? 8 : 0,
            };
            const fourthCriteria = {
              question: req.body.criteriaList[3].question,
              answer:
                req.body.criteriaList[3].answer === "firstOption"
                  ? answerOptions[3].firstOption
                  : answerOptions[3].secondOption,
              score: 4,
            };
            const fifthCriteria = {
              question: req.body.criteriaList[4].question,
              answer:
                req.body.criteriaList[4].answer === "firstOption"
                  ? answerOptions[4].firstOption
                  : answerOptions[5].secondOption,
              score: req.body.criteriaList[4].answer === "firstOption" ? 4 : 0,
            };
            const sixthCriteria = {
              question: req.body.criteriaList[5].question,
              answer:
                req.body.criteriaList[5].answer === "firstOption"
                  ? answerOptions[5].firstOption
                  : answerOptions[5].secondOption,
              score: req.body.criteriaList[5].answer === "firstOption" ? 10 : 0,
            };

            criteriaList = [
              firstCriteria,
              secondCriteria,
              thirdCriteria,
              fourthCriteria,
              fifthCriteria,
              sixthCriteria,
            ];
            criteriaList.forEach((element) => {
              totalScore += element.score;
            });
            const seventhCriteria = {
              question: req.body.criteriaList[6].question,
              answer: req.body.criteriaList[6].answer,
              score:
                req.body.criteriaList[6].answer === 10
                  ? 30
                  : score(totalScore, req.body.criteriaList[6].answer),
            };
            const newCondidate = new Condidates({
              cin: req.body.cin,
              fingerPrint: req.body.fingerPrint,
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              birthDay: req.body.birthDay,
              address: req.body.address,
              city: req.body.city,
              village: req.body.village,
              civilStatus: req.body.civilStatus,
              edicationalLevel: req.body.edicationalLevel,
              lastStadyLevel: req.body.lastStadyLevel,
              phone: req.body.phone,
              sexe: req.body.sexe,
              email: req.body.email,
              criteriaList: [...criteriaList, seventhCriteria],
              totalScore: totalScore + seventhCriteria.score,
            });
            newCondidate
              .save()
              .then(
                (condidate) => {
                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  res.json(condidate);
                },
                (err) => next(err)
              )
              .catch((err) => next(err));
          } else {
            return res.status(400).json({ cin: "Vous êtes déjà abonné" });
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });
//GET REJECTED CANDIDATES
condidateRouter
  .route("/rejected")
  .get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Condidates.find({ status: candidateStatus.rejected })
      .sort({ totalScore: -1 })
      .skip((req.query.page - 1) * 10)
      .limit(10)
      .then(
        (condidates) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(condidates);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });
//GET WAITED CANDIDATES
condidateRouter
  .route("/waited")
  .get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Condidates.find({ status: candidateStatus.waited })
      .sort({ totalScore: -1 })
      .skip((req.query.page - 1) * 10)
      .limit(10)
      .then(
        (condidates) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(condidates);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });
//GET INITAIL CANDIDATES
condidateRouter
  .route("/initial")
  .get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Condidates.find({ status: candidateStatus.initial })
      .sort({ totalScore: -1 })
      .skip((req.query.page - 1) * 10)
      .limit(10)
      .then(
        (condidates) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(condidates);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });
//GET FINAL CANDIDATES
condidateRouter
  .route("/final")
  .get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Condidates.find({ status: candidateStatus.final })
      .sort({ totalScore: -1 })
      .skip((req.query.page - 1) * 10)
      .limit(10)
      .then(
        (condidates) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(condidates);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

condidateRouter
  .route("/admin/:condidateId")
  .put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Condidates.findByIdAndUpdate(
      req.params.condidateId,
      {
        $set: { status: req.body.status },
      },
      { new: true }
    )
      .then(
        (condidate) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(condidate);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });
// USED BY ADMIN TO GET CONDIDATE INFO BY CIN NUMBER
condidateRouter
  .route("/search/:candidateCin")
  .get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Condidates.findOne({ cin: req.params.candidateCin })
      .then((condidate) => {
        if (!condidate) {
          return res.status(404).json({ error: "cin not found" });
        } else {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(condidate);
        }
      })
      .catch((err) => {
        res.status(404).json({ error: err });
      });
  });
// SHOW SUBMITION STATE TO CONDIDATE
condidateRouter.route("/:condidateCin").get(limiter, (req, res, next) => {
  Condidates.findOne(
    { cin: req.params.condidateCin },
    { cin: 1, firstName: 1, lastName: 1, status: 1, sexe: 1 }
  )
    .then((condidate) => {
      if (!condidate) {
        return res.status(404).json("cin not found");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(condidate);
      }
    })
    .catch((err) => {
      res.status(404).json({ error: err });
    });
});

module.exports = condidateRouter;
