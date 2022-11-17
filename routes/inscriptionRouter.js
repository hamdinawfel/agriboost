require('dotenv').config();
const express = require('express');
const Inscription = require('../models/inscription');
var checkCandidateHasInscription = require('../middlewares/checkCandidateHasInscription');
var checkCondidateIsAdmitted = require('../middlewares/checkCondidateIsAdmitted');

const inscriptionRouter = express.Router();

inscriptionRouter
  .route('/')
  .post(
      checkCondidateIsAdmitted,
      checkCandidateHasInscription,
    (req,res)=>{
        const inscription = new Inscription({
            condidate: res.admittedCondidate,
            cin: req.body.cin,
            sector: req.body.sector,
          });
        inscription
          .save()
          .then(()=>{
            res.status(201).json({
                message: "Inscription succesufully saved"
            })
          })
          .catch((err) => {
            res.status(500).json({
                error: err
            })
          })
  }
    
  );

module.exports = inscriptionRouter;
