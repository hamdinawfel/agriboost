require('dotenv').config()
const express = require('express');
const Condidates = require('../models/condidat');
var authenticate = require('../authenticate');

const condidatRouter = express.Router();


condidatRouter.route('/') 
.get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
  Condidates.find({}).skip((req.query.page -1)*10).limit(10)
  .then((condidates) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(condidates);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.post( (req, res, next) => {
  Condidates.findOne({cin: req.body.cin})
  .then((condidat) => {
      if (!condidat) {
        Condidates.create(req.body)
        .then((condidat) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(condidat);
        }, (err) => next(err))
        .catch((err) => next(err));
      }
      else {
          return res.status(400).json({ cin: "Vous êtes déjà abonné" });
      }
  }, (err) => next(err))
  .catch((err) => next(err));
})

condidatRouter.route('/count') 
.get(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
  Condidates.find({}).countDocuments()
  .then((condidates) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(condidates);
  }, (err) => next(err))
  .catch((err) => next(err));
})
module.exports = condidatRouter;
