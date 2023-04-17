import pool from '../../services/pgClient.js';
import { ProductInPlot } from '../../models/ProductInPlot.js';
import { errors } from '../../modules/errors.js';

const productInPlotDataMapper = new ProductInPlot(pool);

export const productInPlotController = {
    /**
     * Return a json response with all products in plot presents in the database.
     * @param {Request} request 
     * @param {Response} response 
     */
    allProductsInPlot: async function (request, response) {
        try {
            const allProductsInPlot = await productInPlotDataMapper.findAll();

            response.json( allProductsInPlot );   

        } catch(error) {
            errors.error500(response, error);
        }
    },
};