const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const criteriaSchema = new Schema({
    question: {
        type: String,
        required:true
      }, 
    answer: {
        type: String,
        required:true
      }, 
    score:{ 
        type: Number,
        required:true
    },
    isVerified:{ 
        type: Boolean,
        required:false,
        default: false
    }
})
const condidateSchema = new Schema({
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
  criteriaList:[criteriaSchema],
  totalScore:   {
    type: Number,
    required:true,
    default: 0
},
acceptedStatus:   {
  type: String,
  required:false,
},
  }, {
  timestamps: true
});

module.exports = mongoose.model("condidates", condidateSchema);