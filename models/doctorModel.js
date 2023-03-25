import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    emal: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    feePerConsultation: {
      type: Number,
      required: true,
    },
    consulationHours: {
      type: String,
      required: true,
    },
    timings: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.Schema('Doctor', doctorSchema);
