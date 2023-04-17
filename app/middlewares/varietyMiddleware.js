import { varietyDataMapper } from '../models/Variety.js';
import { APIError } from '../services/error/APIError.js';

export const varietyMiddleware = {
    /**
    * Load a variety item inside the request object
    * If the item exist, stock inside request.instance
    * Otherwise, send an error with status 400.
    * @param {Request} request 
    * @param {Response} response 
    * @param {next} next 
    * @param {Number} id Id of a variety
    */
    async loadVariety(request, response, next, id){
        try {
            const varietyFound = await varietyDataMapper.findOne(id);
            if (varietyFound) {
                request.instance = varietyFound;
                next();
            } else {
                next(new APIError('Variety not found', 400));
            }
        } catch(error){
            next(new APIError('Internal server error', 500));
        }       
    }
};