import { BadRequestError, NotFoundError } from '../errors/index.js';
import User from '../models/userModel.js';
import Doctor from '../models/doctorModel.js';
import { sendToken } from '../utils/jwt.js';
import { deleteOne, getMany, getOne, updateOne } from '../utils/handleAPI.js';

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

export const applyDoctor = async (req, res) => {
  // const user = await User.findById(req.user.id);
  // TODO: get doctor details from current user data
  const newDoctor = await Doctor.create({
    ...req.body,
    status: 'pending',
    userId: req.user.id,
    user: req.user.id,
  });
  const adminUser = await User.findOne({ role: 'admin' });

  const unSeenNotifications = adminUser.unSeenNotifications;
  unSeenNotifications.push({
    type: 'new-doctor-request',
    message: `${newDoctor.firstName} ${newDoctor.lastName} has applied for doctor account`,
    data: {
      doctorId: newDoctor._id,
      name: `${newDoctor.firstName} ${newDoctor.lastName}`,
    },
    onClickPath: '/admin/doctors',
  });
  await User.findByIdAndUpdate(adminUser._id, { unSeenNotifications });
};

export const markAllAsSeen = async (req, res) => {
  const user = await User.findOne({ _id: req.user.id });
  const unSeenNotifications = user.unSeenNotifications;
  user.seenNotifications = unSeenNotifications;
  user.unSeenNotifications = [];
  await User.findByIdAndUpdate(user._id, user);
  res.status(200).json({ success: true, message: 'notifications seen' });
};

export const clearAllNotifications = async (req, res) => {
  const user = await User.findOne({ _id: req.user.id });
  user.seenNotifications = [];
  user.unSeenNotifications = [];
  await User.findByIdAndUpdate(user._id, user);
  res.status(200).json({ success: true, message: 'notifications cleared' });
};

export const updateDoctor = async (req, res) => {
  const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body);
  const user = await User.findById(doctor.userId);
  const unSeenNotifications = user.unSeenNotifications;
  unSeenNotifications.push({
    type: 'doctor-request-approved',
    message: `Your doctor account has been ${req.body.status}`,
    onClickPath: `/user/notifications`,
  });
  await User.findByIdAndUpdate(doctor.userId, {
    unSeenNotifications,
    role: 'doctor',
  });
};

export const getUsers = getMany(User);

export const getUser = getOne(User);

export const updateUser = updateOne(User);

export const deleteUser = deleteOne(User);

export const getDoctors = getMany(Doctor);

export const getDoctor = getOne(Doctor);

// export const updateDoctor = updateOne(Doctor);

export const deleteDoctor = deleteOne(Doctor);
