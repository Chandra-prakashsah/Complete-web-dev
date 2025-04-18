import express from 'express'
import { register, login } from '../controllers/authController.js'
import { validateLoginInput, validateRegisterInput } from '../middlewares/validationHandler.js';

const router = express.Router();

router.post('/login', validateLoginInput, login);
router.post('/register', validateRegisterInput, register);

export default router;