require('dotenv').config()
const express = require('express');
const Condidates = require('../models/condidat');
var router = express.Router();

const condidatRouter = express.Router();


condidatRouter.route('/') 
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
module.exports = condidatRouter;
