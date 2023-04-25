import { Router} from 'express';
import { bookingController } from '../controllers/bookingController.js';
import { bookingValidate } from '../../services/validator/booking/validate.js';
import { bookingMiddleware } from '../../middlewares/bookingMiddleware.js';

const bookingRouter = Router();

/**
 * Route : /admin/bookings
 */
bookingRouter.get('/', bookingController.listPage);

bookingRouter.param('id', bookingMiddleware.loadBooking);
bookingRouter.get('/:id(\\d+)/detail', bookingController.detailPage);
/**
 * Route : /admin/bookings/:id/edit
 */
bookingRouter.get('/:id(\\d+)/edit', bookingController.editPage);
bookingRouter.post('/:id(\\d+)/edit', bookingValidate.editBody, bookingController.editAction);

export { bookingRouter };