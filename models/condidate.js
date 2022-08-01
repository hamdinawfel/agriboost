const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const condidateSchema = new Schema(
  {
    //Personel Info : STEP 1
    cin: {
      type: String,
      required: true,
      unique: true,
    },
    fingerPrint: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    birthDay: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    village: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    sexe: {
      type: String,
      required: true,
    },
    civilStatus: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    // Supplementary info : STEP 2
    edicationalLevel: {
      type: String,
      required: true,
    },
    lastStadyLevel: {
      type: String,
      required: true,
    },
    isCandidateHaveCnss: {
      type: String,
      required: true,
    },
    snssDuration: {
      type: String,
    },
    isCandidateHavePatente: {
      type: String,
      required: true,
    },
    patenteDuration: {
      type: String,
    },
    // Social info : STEP 3
    candidateTreatmentCard: {
      type: String,
      required: true,
    },
    isCandidateHaveChildren: {
      type: String,
      required: true,
    },
    isCandidateHaveSiblings: {
      type: String,
      required: true,
    },
    isCandidateHaveAnetiInscription: {
      type: String,
      required: true,
    },
    unemploymentScore: {
      type: Number,
      required: true,
    },
    //
    totalScore: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: String,
      required: false,
      default: "مطلبكم في مرحلة الفرز",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("condidates", condidateSchema);
