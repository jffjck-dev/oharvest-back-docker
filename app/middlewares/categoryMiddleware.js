import { categoryDataMapper } from '../models/Category.js';
import { APIError } from '../services/error/APIError.js';

export const categoryMiddleware = {
    /**
    * Load a category item inside the request object
    * If the item exist, stock inside request.instance
    * Otherwise, send an error with status 400.
    * @param {Request} request 
    * @param {Response} response 
    * @param {NextFunction} next
    * @param {Number} id Id of a category
    */
    async loadCategory(request, response, next, id){
        try {
            const categoryFound = await categoryDataMapper.findOne(id);
            if (categoryFound) {
                request.instance = categoryFound;
                next();
            } else {
                next(new APIError('Category not found', 400));
            }
        } catch(error){
            next(new APIError('Internal server error', 500));
        }       
    }
};

