const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inscriptionSchema = new Schema(
  {
    condidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'condidates',
    },
    cin: {
      type: String,
      required: true,
      unique: true,
    },
    sector: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('inscription', inscriptionSchema);