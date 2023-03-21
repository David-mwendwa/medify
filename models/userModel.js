import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'please provide a name'],
      minlength: [3, 'Your name must be above 3 characters'],
      maxlength: [30, 'Your name cannot exceed 30 characters'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'please provide an email'],
      validate: [validator.isEmail, 'Please enter a valid email address'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'please provide a password'],
      minlength: [6, 'Your name must be longer than 6 charactes'],
      select: false,
      trim: true,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'please confirm your password'],
      validate: {
        validator: function (val) {
          return this.password === val;
        },
        message: "Passwords don't match",
      },
    },
    role: {
      type: String,
      required: true,
      enum: ['user', 'doctor', 'admin'],
      default: 'user',
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  this.passwordConfirm = undefined;
});

userSchema.methods.comparePassword = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
};

export default mongoose.model('User', userSchema);
