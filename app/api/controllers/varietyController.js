import { varietyDataMapper } from '../../models/Variety.js';
import { APIError } from '../../services/error/APIError.js';

export const varietyController = {
    /**
     * Return a json response with all varieties presents in the database.
     * @param {Request} request 
     * @param {Response} response 
     * @param {NextFunction} next
     */
    allVariety: async function (request, response, next) {
        try {
            const varieties = await varietyDataMapper.findAll();

            response.json( varieties );   

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Return a json response with one variety present in the database.
     * @param {Request} request 
     * @param {Response} response 
     */
    oneVariety: async function (request, response) {
        const oneVAriety = request.instance;

        response.json( oneVAriety );
    },
};