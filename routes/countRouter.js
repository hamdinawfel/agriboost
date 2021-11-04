require("dotenv").config();
const express = require("express");
const Condidates = require("../models/condidate");
var authenticate = require("../middlewares/authenticate");

const countRouter = express.Router();

const candidateStatus = {
  submitted: "مطلبكم في مرحلة الفرز",
  rejected: "نأسف لعدم قبول مطلبكم",
  waited: "مطلبكم في قائمة الإنتظار",
  initial: "حضي مطلبكم بالقبول مبدئيا",
  final: "حضي مطلبكم بالقبول",
};

countRouter
  .route("/submitted")
  .get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Condidates.find({})
      .countDocuments()
      .then(
        (count) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(count);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

countRouter
  .route("/rejected")
  .get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Condidates.find({ status: candidateStatus.rejected })
      .countDocuments()
      .then(
        (count) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(count);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

countRouter
  .route("/waited")
  .get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Condidates.find({ status: candidateStatus.waited })
      .countDocuments()
      .then(
        (count) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(count);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

countRouter
  .route("/initial")
  .get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Condidates.find({ status: candidateStatus.initial })
      .countDocuments()
      .then(
        (count) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(count);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

countRouter
  .route("/final")
  .get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Condidates.find({ status: candidateStatus.final })
      .countDocuments()
      .then(
        (count) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(count);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = countRouter;
