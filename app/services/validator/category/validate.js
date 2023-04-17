import { categorySchema } from './schema.js';
import { APIError } from '../../error/APIError.js';

export const categoryValidate = {
    /**
     *
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    validateBody(request, response, next){
        const { error } = categorySchema.validate(request.body);

        if(error){
            next(new APIError(error, 400));
        } else {
            next();
        }
    }
};