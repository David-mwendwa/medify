import express from 'express';
import {
  applyDoctor,
  clearAllNotifications,
  deleteDoctor,
  deleteUser,
  getDoctor,
  getDoctors,
  getUser,
  getUsers,
  login,
  logout,
  markAllAsSeen,
  register,
  updateDoctor,
  updateUser,
} from '../controllers/userController.js';
import { authorizeRoles, protect } from '../middleware/auth.js';
const router = express.Router();

router.route('/user/register').post(register);
router.route('/user/login').post(login);
router.route('/user/logout').get(logout);

router.route('/user/apply-doctor').post(protect, applyDoctor);
router
  .route('/user/mark-all-notifications-as-seen')
  .post(protect, markAllAsSeen);
router
  .route('/user/delete-all-notifications')
  .post(protect, clearAllNotifications);

router.route('/admin/users').get(protect, authorizeRoles('admin'), getUsers);
router
  .route('/admin/users/:id')
  .get(protect, authorizeRoles('admin'), getUser)
  .patch(protect, authorizeRoles('admin'), updateUser)
  .delete(protect, authorizeRoles('admin'), deleteUser);

router
  .route('/admin/doctors')
  .get(protect, authorizeRoles('admin'), getDoctors);
router
  .route('/admin/doctors/:id')
  .get(protect, authorizeRoles('admin'), getDoctor)
  .patch(protect, authorizeRoles('admin'), updateDoctor)
  .delete(protect, authorizeRoles('admin'), deleteDoctor);

export default router;
