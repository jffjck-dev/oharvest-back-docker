import pool from '../../services/pgClient.js';
import { Plot } from '../../models/Plot.js';

const plotDataMapper = new Plot(pool);

export const plotController = {
    /**
     * Return a json response with all plots presents in the database.
     * @param {Request} request 
     * @param {Response} response 
     */
    allPlot: async function (request, response) {
        const plot = await plotDataMapper.findAll();

        response.json( plot );
    },

    onePlot: async function (request, response) {
        const id = request.params.id;

        const onePlot = await plotDataMapper.findOne(id);

        response.json( onePlot );
    },
};