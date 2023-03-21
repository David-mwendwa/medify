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

// TODO: make sure the user is authenticated in order to logout
export const logout = async (req, res, next) => {
  res.cookie('token', null, { expires: new Date(Date.now()), httpOnly: true });
  res.status(200).json({ success: true, message: 'Logged out' });
};
