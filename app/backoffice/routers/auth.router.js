import { Router } from 'express';
import { authController } from '../controllers/authController.js';
import { authValidate } from '../../services/validator/authentification/validate.js';
import { employeeMiddleware } from '../../middlewares/employeeMiddleware.js';

const authRouter = Router();

/** Route : /login */
authRouter.get('/login', authController.loginPage);

/** 
 * Route : /login 
 * when the login form is submitted 
*/
authRouter.post('/login', authValidate.loginBody, employeeMiddleware.loadEmployee , authController.loginAction);

/** Route : /logout */
authRouter.get('/logout', authController.logoutAction);

export { authRouter };