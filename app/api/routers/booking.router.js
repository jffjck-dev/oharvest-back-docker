import { Router} from 'express';
import { bookingController } from '../controllers/bookingController.js';
import { bookingValidate } from '../../services/validator/booking/validate.js';
import { bookingMiddleware } from '../../middlewares/bookingMiddleware.js';

const apiBookingRouter = Router();

/**
 * Route : /admin/bookings
 */
apiBookingRouter.get('/', bookingController.allBooking);
apiBookingRouter.post('/', bookingValidate.createBody, bookingController.createBooking);

apiBookingRouter.param('id', bookingMiddleware.loadBooking);
/**
 * Route : /admin/bookings/:id/edit
 */
apiBookingRouter.get('/:id(\\d+)', bookingController.oneBooking);
apiBookingRouter.put('/:id(\\d+)', bookingValidate.editBody, bookingController.updateBooking);

export { apiBookingRouter };