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

    /**
     * Create a new category in the database and return it to a json response.
     * @param {Request} request 
     * @param {Response} response
     * @param {NextFunction} next
     */
    createCategory: async function (request, response, next) {
        try {
            const createCategory = await categoryDataMapper.create(request.body);

            response.json( createCategory );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Update an existing category in the database and return it to a json response.
     * @param {Request} request 
     * @param {Response} response
     * @param {NextFunction} next
     */
    updateCategory: async function (request, response, next) {
        const categoryFound = request.instance;

        const updatedCategory = { ...categoryFound, ...request.body };

        try {
            const result = await categoryDataMapper.update(updatedCategory);

            response.json( result );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },
};