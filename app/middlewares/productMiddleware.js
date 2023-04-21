import { productDataMapper } from '../models/Product.js';
import { APIError } from '../services/error/APIError.js';

export const productMiddleware = {
    /**
    * Load a product item inside the request object
    * If the item exist, stock inside request.instance
    * Otherwise, send an error with status 400.
    * @param {Request} request 
    * @param {Response} response 
    * @param {next} next 
    * @param {Number} id Id of a product
    */
    async loadProduct(request, response, next, id){
    
        try {
            const productFound = await productDataMapper.findOne(id);

            if (productFound) {
                request.instance = productFound;
                next();
            } else {
                next(new APIError('Product not found', 400));
            }
        } catch(error){
            next(new APIError('Internal server error', 500));
        }       
    },
    /**
    * Load all products inside the request object
    * If the item exist, stock inside request.instance
    * Otherwise, send an error with status 400.
    * @param {Request} request 
    * @param {Response} response 
    * @param {next} next 
    * @param {Number} id Id of a product
    */
    async loadProducts(request, response, next){
        try {
            const productsFound = await productDataMapper.findAll();
            
            if (productsFound) {
                response.locals.products = productsFound;
                next();
            } else {
                next(new APIError('Product not found', 400));
            }
        } catch(error){
            next(new APIError('Internal server error', 500));
        }       
    },
};