import { Router } from 'express';
import { authController } from '../controllers/authController.js';
import { authValidate } from '../../services/validator/authentification/validate.js';
import { employeeMiddleware } from '../../middlewares/employeeMiddleware.js';

const authRouter = Router();

authRouter.get('/login', authController.loginPage);
authRouter.post('/login', authValidate.loginBody, employeeMiddleware.loadEmployee , authController.loginAction);

authRouter.get('/logout', authController.logoutAction);

export { authRouter };