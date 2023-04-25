import { Router} from 'express';
import { adminController } from '../controllers/adminController.js';
import { categoryRouter } from './category.router.js';
import { plotRouter } from './plot.router.js';
import { productRouter } from './product.router.js';
import { varietyRouter } from './variety.router.js';
import { bookingRouter } from './booking.router.js';

const adminRouter = Router();

adminRouter.get('/', adminController.home);

adminRouter.use('/categories', categoryRouter);
adminRouter.use('/plots', plotRouter);
adminRouter.use('/products', productRouter);
adminRouter.use('/varieties', varietyRouter);
adminRouter.use('/bookings', bookingRouter);

export default adminRouter;
