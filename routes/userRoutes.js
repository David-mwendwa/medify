import express from 'express';
import {
  applyDoctor,
  login,
  logout,
  register,
} from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';
const router = express.Router();

router.route('/user/register').post(register);
router.route('/user/login').post(login);
router.route('/user/logout').get(logout);

router.route('/user/apply-doctor').post(protect, applyDoctor);

export default router;
