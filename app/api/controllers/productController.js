import { productDataMapper } from '../../models/Product.js';
import { APIError } from '../../services/error/APIError.js';

export const productController = {
    /**
     * Return a json response with all products presents in the database.
     * @param {Request} request 
     * @param {Response} response  
     * @param {NextFunction} next
     */
    allProduct: async function (request, response, next) {
        try {
            const products = await productDataMapper.findAll();

            response.json( products );   

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Return a json response with one product present in the database.
     * @param {Request} request 
     * @param {Response} response 
     */
    oneProduct: async function (request, response) {
        const oneProduct = request.instance;

        response.json( oneProduct );
    },

    /**
     * Return a json response with all products available presents in the database.
     * @param {Request} request 
     * @param {Response} response  
     * @param {NextFunction} next
     */
    allProductAvailable: async function (request, response, next) {
        try {
            const products = await productDataMapper.findAllProductAvailable();

            response.json( products );

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },
};