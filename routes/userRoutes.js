import express from 'express';
import {
  applyDoctor,
  clearAllNotifications,
  login,
  logout,
  markAllAsSeen,
  register,
} from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';
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

export default router;
