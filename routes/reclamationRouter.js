require("dotenv").config();
const express = require("express");
const Reclamations = require("../models/reclamation");
var authenticate = require("../middlewares/authenticate");

const reclamationRouter = express.Router();

reclamationRouter
  .route("/")
  .get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Reclamations.find({})
      .then((reclamations) => {
        res.status(200).json(reclamations);
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  })
  .post((req, res, next) => {
    const reclamation = new Reclamations({
      cin: req.body.cin,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      message: req.body.message,
    });
    reclamation
      .save()
      .then((reclamation) => {
        res.status(200).json(reclamation);
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /reclamations");
  })
  .delete((req, res, next) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /reclamations");
  });
//
reclamationRouter
  .route("/:reclamationId")
  .get((req, res, next) => {
    res.statusCode = 403;
    res.end(
      "GET operation not supported on /reclamations/" + req.params.reclamationId
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      "POST operation not supported on /reclamations/" +
        req.params.reclamationId
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(
      "PUT operation not supported on /reclamations/" + req.params.reclamationId
    );
  })
  .delete(
    authenticate.verifyUser,
    authenticate.verifyAdmin,
    (req, res, next) => {
      Reclamations.deleteOne({ _id: req.params.reclamationId })
        .then((reclamation) => {
          res.status(200).json(reclamation);
        })
        .catch((err) => {
          res.status(400).json({
            error: err,
          });
        });
    }
  );

module.exports = reclamationRouter;
