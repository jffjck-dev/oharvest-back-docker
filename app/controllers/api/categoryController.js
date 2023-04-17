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

    oneCategory: async function (request, response) {
        const oneCategory = request.instance;

        response.json( oneCategory );
    },

    createCategory: async function (request, response, next) {
        try {
            const createCategory = await categoryDataMapper.create(request.body);

            response.json( createCategory );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

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