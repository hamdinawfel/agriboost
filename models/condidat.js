const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const condidatSchema = new Schema({
  cin: {
    type: String,
    required:true,
    unique:true
  },
  fingerPrint:{
    type: String,
    required:true,
    unique:true
  },
  firstName:{
    type: String,
    required:true
  },
  lastName:{
    type: String,
    required:true
  },
  birthDay:{
    type: String,
    required:true
  },
  address:{
    type: String,
    required:true
  },
  city:{
    type: String,
    required:true
  },
  village:{
    type: String,
    required:true
  },
  civilStatus:{
    type: String,
    required:true
  },
  edicationalLevel:{
    type: String,
    required:true
  },
  lastStadyLevel:{
    type: String,
    required:true
  },
  phone:{
    type: String,
    required:true
  },
  sexe:{
    type: String,
    required:true
  },
  email:{
    type: String,
    required:true
  },
  isBeneficiaryTreatment:{
    type: String,
    required:true
  },
  isMotherOfResidingSon:{
    type: String,
    required:true
  },
  isPreResidingAtDefenseCenter:{
    type: String,
    required:true
  },
  isPreResidingAtCombinedCenter:{
    type: String,
    required:true
  },
  isFamilymembersGuarantee:{
    type: String,
    required:true
  },
  isFamilymembersStudent:{
    type: String,
    required:true
  },
  accepted:   {
    type: Boolean,
    default: false
},
  
  }, {
  timestamps: true
});

module.exports = mongoose.model("condidates", condidatSchema);