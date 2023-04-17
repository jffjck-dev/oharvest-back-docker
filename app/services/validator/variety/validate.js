import { varietySchema } from './schema.js';
import { APIError } from '../../error/APIError.js';

export const varietyValidate = {
    /**
    * Validate all informations inside the body based on a schema of a post
    * @param {Request} request 
    * @param {Response} response 
    * @param {NextFunction} next
    */
    validateBody(request, response, next){
        const { error } = varietySchema.validate(request.body);

        if(error) {
            next(new APIError(error, 400));
        } else {
            next();
        }
    }
};