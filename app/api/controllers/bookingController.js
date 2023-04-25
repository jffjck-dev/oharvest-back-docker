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
     */
    oneBooking: async function (request, response) {
        const oneBooking = request.instance;

        response.json( oneBooking );
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

    /**
     * Create a new booking in the database and return it to a json response.
     * @param {Request} request 
     * @param {Response} response
     * @param {NextFunction} next
     */
    updateBooking: async function (request, response, next) {
        const bookingFound = request.instance;

        const updatedBooking = {...bookingFound, ...request.body};

        try {
            const result = await bookingDataMapper.update(updatedBooking);

            response.json( result );

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },
};