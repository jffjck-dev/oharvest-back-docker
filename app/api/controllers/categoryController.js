import { categoryDataMapper } from '../../models/Category.js';
import { APIError } from '../../services/error/APIError.js';

export const categoryController = {
    /**
     * Return a json response with all categories presents in the database.
     * @param {Request} request 
     * @param {Response} response 
     * @param {NextFunction} next
     */
    allCategory: async function (request, response, next) {
        try {
            const categories = await categoryDataMapper.findAll();

            response.json( categories );   

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Return a json response with one category present in the database.
     * @param {Request} request 
     * @param {Response} response 
     */
    oneCategory: async function (request, response) {
        const oneCategory = request.instance;

        response.json( oneCategory );
    },
};