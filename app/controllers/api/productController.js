import pool from '../../services/pgClient.js';
import { Product } from '../../models/Product.js';

const productDataMapper = new Product(pool);

export const productController = {
    /**
     * Return a json response with all products presents in the database.
     * @param {Request} request 
     * @param {Response} response 
     */
    allProduct: async function (request, response) {
        const product = await productDataMapper.findAll();

        response.json( product );
    },

    oneProduct: async function (request, response) {
        const id = request.params.id;

        const oneProduct = await productDataMapper.findOne(id);

        response.json( oneProduct );
    },
};