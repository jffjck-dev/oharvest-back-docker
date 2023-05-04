import { Router} from 'express';
import { bookingController } from '../controllers/bookingController.js';
import { bookingValidate } from '../../services/validator/booking/validate.js';

const apiBookingRouter = Router();

/** Route : /admin/bookings */
apiBookingRouter.get('/', bookingController.allBooking);
apiBookingRouter.post('/', bookingValidate.create, bookingController.createBooking);

export { apiBookingRouter };