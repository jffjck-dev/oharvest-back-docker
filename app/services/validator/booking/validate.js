import { createSchema, editSchema  } from './schema.js';
import { APIError } from '../../error/APIError.js';

export const bookingValidate = {
    /**
     * Validate the body submitted with the corresponding schema
     * If an error occurs, redirect to create page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    create(request, response, next){
        const { error } = createSchema.validate(request.body);

        if(error){
            next(new APIError(error, 400));
        } else {
            next();
        }
    },

    /**
     * Validate the body submitted with the corresponding schema
     * If an error occurs, redirect to edit page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    edit(request, response, next){
        const { error } = editSchema.validate(request.body);

        if(error){
            const booking = request.instance;
            response.render('admin/form', { error, title: 'Edition d\'une réservation', entity: booking, action: 'edit' });

        } else {
            next();
        }
    },
};