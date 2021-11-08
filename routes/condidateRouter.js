require("dotenv").config();
const express = require("express");
const Condidates = require("../models/condidate");
var authenticate = require("../middlewares/authenticate");
var calulateUnemploymentScore = require("../middlewares/calulateUnemploymentScore");
var calulateUnemploymentDuration = require("../middlewares/calulateUnemploymentDuration");
var verifyCandidateTime = require("../middlewares/verifyCandidateTime");
const limiter = require("../middlewares/limiter");

const condidateRouter = express.Router();

const candidateStatus = {
  submitted: "مطلبكم في مرحلة الفرز",
  rejected: "نأسف لعدم قبول مطلبكم",
  waited: "مطلبكم في قائمة الإنتظار",
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
            let totalScore = 0;
            if (req.body.candidateTreatmentCard === "بطاقة العلاج المجاني") {
              totalScore = totalScore + 4;
            }
            if (
              req.body.candidateTreatmentCard ===
              "بطاقة علاج ذات التعريفة المنخفظة"
            ) {
              totalScore = totalScore + 3;
            }
            if (req.body.isCandidateHaveChildren === "نعم") {
              totalScore = totalScore + 1;
            }
            if (req.body.isCandidateHaveSiblings === "نعم") {
              totalScore = totalScore + 1;
            }
            if (req.body.isCandidateHaveAnetiInscription === "نعم") {
              totalScore = totalScore + 1;
            }
            const unemploymentScore = calulateUnemploymentScore(
              calulateUnemploymentDuration(
                req.body.birthDay,
                req.body.lastStadyLevel,
                req.body.isCandidateHaveCnss,
                req.body.snssDuration,
                req.body.isCandidateHavePatente,
                req.body.patenteDuration
              )
            );
            const newCondidate = new Condidates({
              //Personel Info : STEP 1
              cin: req.body.cin,
              fingerPrint: req.body.fingerPrint,
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              birthDay: req.body.birthDay,
              address: req.body.address,
              village: req.body.village,
              city: req.body.city,
              sexe: req.body.sexe,
              civilStatus: req.body.civilStatus,
              phone: req.body.phone,
              email: req.body.email,
              // Supplementary info : STEP 2
              edicationalLevel: req.body.edicationalLevel,
              lastStadyLevel: req.body.lastStadyLevel,
              isCandidateHaveCnss: req.body.isCandidateHaveCnss,
              snssDuration: req.body.snssDuration,
              cnssId: req.body.cnssId,
              isCandidateHavePatente: req.body.isCandidateHavePatente,
              patenteDuration: req.body.patenteDuration,
              patenteId: req.body.patenteId,
              // Social info : STEP 3
              candidateTreatmentCard: req.body.candidateTreatmentCard,
              isCandidateHaveChildren: req.body.isCandidateHaveChildren,
              isCandidateHaveSiblings: req.body.isCandidateHaveSiblings,
              isCandidateHaveAnetiInscription:
                req.body.isCandidateHaveAnetiInscription,
              unemploymentScore,
              totalScore: totalScore + unemploymentScore,
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
