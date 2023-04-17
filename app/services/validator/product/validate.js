import { productSchema } from './schema.js';
import { APIError } from '../../error/APIError.js';

export const productValidate = {
    /**
    * Validate all informations inside the body based on a schema of a post
    * @param {Request} request 
    * @param {Response} response
    * @param {NextFunction} next
    * */
    validateBody(request, response, next){
        const { error } = productSchema.validate(request.body);

        if(error) {
            next(new APIError(error, 400));
        } else {
            next();
        }
    }
};
