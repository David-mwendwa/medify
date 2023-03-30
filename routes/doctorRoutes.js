import express from 'express';
import {
  deleteDoctor,
  getDoctor,
  getDoctorInfo,
  getDoctors,
  updateDoctor,
  updateDoctorProfile,
} from '../controllers/doctorController.js';
import { authorizeRoles, protect } from '../middleware/auth.js';
const router = express.Router();

router
  .route('/doctor/profile/:userId')
  .get(protect, getDoctorInfo)
  .patch(protect, updateDoctorProfile);

router
  .route('/admin/doctors')
  .get(protect, authorizeRoles('admin'), getDoctors);
router
  .route('/admin/doctors/:id')
  .get(protect, authorizeRoles('admin'), getDoctor)
  .patch(protect, authorizeRoles('admin'), updateDoctor)
  .delete(protect, authorizeRoles('admin'), deleteDoctor);

export default router;
