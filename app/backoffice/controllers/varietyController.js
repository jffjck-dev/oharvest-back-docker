import { varietyDataMapper } from '../../models/Variety.js';
import { APIError } from '../../services/error/APIError.js';

const baseUrl = '/admin/varieties';
const viewDirectory = 'variety';

export const varietyController = {
    listPage: async function(request, response) {
        const varieties = await varietyDataMapper.findAll();
        
        response.render( `${ viewDirectory }/list`, { varieties } );
    },

    detailPage: function (request, response, next) {
        try {
            const variety = request.instance;

            response.render( `${ viewDirectory }/detail`, { variety, actionLink: `${ baseUrl }/${ variety.id }/edit` } );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
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
            await varietyDataMapper.create(request.body);

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    editPage: function (request, response, next) {
        try {
            const variety = request.instance;

            response.render( `${ viewDirectory }/edit`, { variety, actionLink: `${ baseUrl }/${ variety.id }/edit` } );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    editAction: async function (request, response, next) {
        const varietyFound = request.instance;

        const updatedPlot = { ...varietyFound, ...request.body };

        try {
            await varietyDataMapper.update(updatedPlot);

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    deleteAction: async function (request, response, next) {
        const varietyFound = request.instance;

        try {
            await varietyDataMapper.delete(varietyFound);

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },
};
