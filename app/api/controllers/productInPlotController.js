import { productInPlotDataMapper } from '../../models/ProductInPlot.js';
import { APIError } from '../../services/error/APIError.js';

export const productInPlotController = {
    /**
     * Return a json response with all products in plot presents in the database.
     * @param {Request} request 
     * @param {Response} response 
     * @param {NextFunction} next
     */
    allProductsInPlot: async function (request, response, next) {
        try {
            const allProductsInPlot = await productInPlotDataMapper.findAll();

            response.json( allProductsInPlot );   

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },
};