import { bookingDataMapper } from '../../models/Booking.js';
import { APIError } from '../../services/error/APIError.js';

const baseUrl = '/admin/bookings';

export const bookingController = {
    /**
     * Render a list of all bookings from the database
     * @param {Request} request
     * @param {Response} response
     */
    listPage: async function (request, response) {
        const bookings = await bookingDataMapper.findAll('visitAt');

        if (request.app.locals.event) {
            response.locals.event = request.app.locals.event;

            delete request.app.locals.event;
        }
        
        response.render( 'admin/list', { entities: bookings, title: 'Liste des réservations', field: 'réservation', hideCreateAction: true, hideDeleteAction: true } );
    },

    /**
     * Render a detail page from one specified booking from the database.
     * @param {Request} request
     * @param {Response} response
     */
    detailPage: async function (request, response) {
        const booking = request.instance;

        response.render( 'admin/form', {
            title: 'Détail d\'une réservation', 
            entity: booking,
            action: 'detail',
            hideDeleteAction: true
        });
    },

    /**
     * Render a form with the value of the specified booking
     * @param {Request} request
     * @param {Response} response
     */
    editPage: function (request, response) {
        const booking = request.instance;

        response.render( 'admin/form', {
            title: 'Edition de la réservation', 
            entity: booking, 
            action: `${booking.id}/edit`,
            hideDeleteAction: true
        });
    },

    /**
     * Update an existing booking with data provided by the form to the database
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    editAction: async function (request, response, next) {
        const bookingFound = request.instance;

        const updatedBooking = { ...bookingFound, ...request.body };

        try {
            const result = await bookingDataMapper.update(updatedBooking);

            request.app.locals.event = {action: 'edit', message: result.name + ' a été édité avec succès!!'};
            
            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },
};