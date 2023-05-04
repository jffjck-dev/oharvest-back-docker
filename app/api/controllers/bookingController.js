import { bookingDataMapper } from '../../models/Booking.js';
import { APIError } from '../../services/error/APIError.js';

export const bookingController = {
    /**
     * Return a json response with all bookings presents in the database.
     * @param {Request} request 
     * @param {Response} response  
     * @param {NextFunction} next
     */
    allBooking: async function (request, response, next) {
        try {
            const bookings = await bookingDataMapper.findAllByDate();

            response.json( bookings );   

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Return a json response with one booking present in the database.
     * @param {Request} request 
     * @param {Response} response 
     * @param {NextFunction} next
     */
    createBooking: async function (request, response, next) {
        try {
            const createBooking = await bookingDataMapper.create(request.body);

            response.json( createBooking );

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },
};