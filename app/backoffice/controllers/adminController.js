import { bookingDataMapper } from '../../models/Booking.js';

export const adminController = {
    /**
     * Render of the dashboard
     * @param {Request} request
     * @param {Response} response
     */
    home: async function (request, response) {
        const bookings = await bookingDataMapper.findBookingPending();

        response.render( 'home', { bookings } );
    },
};