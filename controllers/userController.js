import { BadRequestError, NotFoundError } from '../errors/index.js';
import User from '../models/userModel.js';
import { sendToken } from '../utils/jwt.js';

export const register = async (req, res) => {
  const { name, email, password, passwordConfirm } = req.body;
  const user = await User.create({ name, email, password, passwordConfirm });
  sendToken(user, 200, res);
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new NotFoundError('incorrect email or password');
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new BadRequestError('incorrect email or password');
  }
  sendToken(user, 200, res);
};
