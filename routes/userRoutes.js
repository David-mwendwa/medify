import express from 'express';
import { login, register } from '../controllers/userController.js';
const router = express.Router();

router.route('/user/register').post(register);
router.route('/user/login').post(login);

export default router;
