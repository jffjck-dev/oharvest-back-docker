import { plotDataMapper } from '../../models/Plot.js';
import { APIError } from '../../services/error/APIError.js';

export const plotController = {
    /**
     * Return a json response with all plots presents in the database.
     * @param {Request} request 
     * @param {Response} response 
     * @param {NextFunction} next
     */
    allPlot: async function (request, response, next) {
        try {
            const plots = await plotDataMapper.findAll();

            response.json( plots );   

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Return a json response with one plot present in the database.
     * @param {Request} request 
     * @param {Response} response 
     */
    onePlot: async function (request, response) {
        const onePlot = request.instance;

        response.json( onePlot );
    }
};