import { bookingDataMapper } from '../../models/Booking.js';
import { APIError } from '../../services/error/APIError.js';

const baseUrl = '/admin/bookings';
const viewDirectory = 'booking';

export const bookingController = {
    listPage: async function (request, response) {
        const bookings = await bookingDataMapper.findAll();
        
        response.render( `${ viewDirectory }/list`, { bookings } );
    },

    detailPage: async function (request, response, next) {
        const booking = request.instance;

        response.render( `${ viewDirectory }/detail`, { booking, actionLink: `${ baseUrl }/${booking.id}/edit` } );
    },

    editPage: function (request, response, next) {
        try {
            const booking = request.instance;

            response.render( `${ viewDirectory }/edit`, { booking, actionLink: `${ baseUrl }/${booking.id}/edit` } );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    editAction: async function (request, response, next) {
        const bookingFound = request.instance;

        const updatedBooking = { ...bookingFound, ...request.body };

        try {
            await bookingDataMapper.update(updatedBooking);
            
            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },
};