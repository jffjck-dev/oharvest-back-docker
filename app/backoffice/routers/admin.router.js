import { Router} from 'express';
import { adminController } from '../controllers/adminController.js';

const adminRouter = Router();

adminRouter.get('/', adminController.home);

adminRouter.get('/categories', adminController.category);
adminRouter.get('/plots', adminController.plot);
adminRouter.get('/products', adminController.product);
adminRouter.get('/varieties', adminController.variety);

export default adminRouter;
