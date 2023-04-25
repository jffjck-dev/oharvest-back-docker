import { createSchema, editSchema  } from './schema.js';
import { APIError } from '../../error/APIError.js';

export const bookingValidate = {
    /**
     *
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    createBody(request, response, next){
        const { error } = createSchema.validate(request.body);

        if(error){
            next(new APIError(error, 400));
        } else {
            next();
        }
    },

    editBody(request, response, next){
        const { error } = editSchema.validate(request.body);

        if(error){
            next(new APIError(error, 400));
        } else {
            next();
        }
    },
};