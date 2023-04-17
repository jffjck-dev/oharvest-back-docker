import { plotDataMapper } from '../../models/Plot.js';
import { APIError } from '../../services/error/APIError.js';

export const plotController = {
    /**
     * Return a json response with all plots presents in the database.
     * @param {Request} request 
     * @param {Response} response 
     */
    allPlot: async function (request, response, next) {
        try {
            const plots = await plotDataMapper.findAll();

            response.json( plots );   

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    onePlot: async function (request, response) {
        const onePlot = request.instance;

        response.json( onePlot );
    },

    createPlot: async function (request, response, next) {
        try {
            const createPlot = await plotDataMapper.create(request.body);

            response.json( createPlot );

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    updatePlot: async function (request, response, next) {
        const plotFound = request.instance;

        const updatedPlot = { ...plotFound, ...request.body};

        try {
            const result = await plotDataMapper.update(updatedPlot);

            response.json( result );

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    productsInPlot: async function (request, response) {
        try {
            const productsInPlot = await plotDataMapper.findAll();

            response.json( productsInPlot );   

        } catch(error) {
            errors.error500(response, error);
        }
    },
};