import { bookingDataMapper } from '../models/Booking.js';
import { APIError } from '../services/error/APIError.js';

export const bookingMiddleware = {
    /**
    * Load a booking item inside the request object
    * If the item exist, stock inside request.instance
    * Otherwise, send an error with status 400.
    * @param {Request} request 
    * @param {Response} response 
    * @param {NextFunction} next
    * @param {Number} id Id of a booking
    */
    async loadBooking(request, response, next, id){
        try {
            const bookingFound = await bookingDataMapper.findOne(id);
            if (bookingFound) {
                request.instance = bookingFound;
                next();
            } else {
                next(new APIError('Category not found', 400));
            }
        } catch(error){
            next(new APIError('Internal server error', 500));
        }       
    },
};

