import User from '../models/userModel.js';
import Doctor from '../models/doctorModel.js';
import { deleteOne, getMany, getOne, updateOne } from '../utils/handleAPI.js';

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

export const getDoctorInfo = async (req, res) => {
  const doctor = await Doctor.findOne({ userId: req.params.userId });
  res.status(200).json({ success: true, data: doctor });
};

export const updateDoctorProfile = async (req, res) => {
  await Doctor.findOneAndUpdate({ userId: req.params.userId }, req.body);
  res.status(200).json({ success: true, message: 'Profile updated' });
};

export const getDoctors = getMany(Doctor);

export const getDoctor = getOne(Doctor);

// export const updateDoctor = updateOne(Doctor);

export const deleteDoctor = deleteOne(Doctor);
