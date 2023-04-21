import { plotDataMapper } from '../../models/Plot.js';
import { APIError } from '../../services/error/APIError.js';
import { productInPlotDataMapper } from '../../models/ProductInPlot.js';

const baseUrl = '/admin/plots';
const viewDirectory = 'plot';

export const plotController = {
    listPage: async function(request, response) {
        const plots = await plotDataMapper.findAll();
        
        response.render( `${ viewDirectory }/list`, { plots } );
    },

    detailPage: async function (request, response, next) {
        const plot = request.instance;

        response.render( `${ viewDirectory }/detail`, { plot, actionLink: `${ baseUrl }/${plot.id}/edit` } );
    },

    createPage: function (request, response, next) {
        try {
            response.render( `${ viewDirectory }/create`, { actionLink: `${ baseUrl }/create`} );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    createAction: async function (request, response, next) {
        try {
            await plotDataMapper.create(request.body);

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    editPage: function (request, response, next) {
        const plot = request.instance;

        response.render( `${ viewDirectory }/edit`, { plot, actionLink: `${ baseUrl }/${ plot.id }/edit` } );
    },

    editAction: async function (request, response, next) {
        const plotFound = request.instance;

        const updatedPlot = { ...plotFound, ...request.body };

        try {
            await plotDataMapper.update(updatedPlot);

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    deleteAction: async function (request, response, next) {
        const plotFound = request.instance;

        try {
            await plotDataMapper.delete(plotFound);

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    productsPage: async function (request, response) {
        const plots = await productInPlotDataMapper.findAll();

        response.render( `${ viewDirectory }/product/list`, { plots } );
    },

    addProductAction: async function (request, response, next) {
        try{
            const updateProductInPlot = await productInPlotDataMapper.create(request.body);
            response.json(updateProductInPlot);
        } catch (error) {
            console.log(error);
            next(new APIError('Internal server error', 500));
        }
    },

    removeProductAction: async function (request, response, next) {
        try{
            const updateProductInPlot = await productInPlotDataMapper.delete(request.body);
            response.json(updateProductInPlot);
        } catch (error) {
            console.log(error);
            next(new APIError('Internal server error', 500));
        }
    }
};
