import pool from '../../services/pgClient.js';
import { Category } from '../../models/Category.js';

const categoryDataMapper = new Category(pool);

export const categoryController = {
    /**
     * Return a json response with all categories presents in the database.
     * @param {Request} request 
     * @param {Response} response 
     */
    allCategory: async function (request, response) {
        const categories = await categoryDataMapper.findAll();

        response.json( categories );
    },

    oneCategory: async function (request, response) {
        const id = request.params.id;

        const oneCategory = await categoryDataMapper.findOne(id);
        
        response.json( oneCategory );
    },
};