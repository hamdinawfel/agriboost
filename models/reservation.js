const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema(
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
    phone: {
      type: String,
      required: true,
    },
    isPhoneVerified: {
      type: Boolean,
      default: false,
    },
    smsVerificatioCode: {
      type: String,
      required: true,
    },
    isInformed: {
      type: Boolean,
      default: false,
    },
    trainingPromotion: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('reservations', reservationSchema);
