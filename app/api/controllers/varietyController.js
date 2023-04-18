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

    /**
     * Create a new variety in the database and return it to a json response.
     * @param {Request} request 
     * @param {Response} response
     * @param {NextFunction} next
     */
    createVariety: async function (request, response, next) {
        try {
            const createVariety = await varietyDataMapper.create(request.body);

            response.json( createVariety );

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Update an existing variety in the database and return it to a json response.
     * @param {Request} request 
     * @param {Response} response
     * @param {NextFunction} next
     */
    updateVariety: async function (request, response, next) {
        const varietyFound = request.instance;

        const updatedVariety = {...varietyFound, ...request.body};

        try {
            const result = await varietyDataMapper.update(updatedVariety);

            response.json( result );

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },
};