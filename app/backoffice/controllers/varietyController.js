import { varietyDataMapper } from '../../models/Variety.js';
import { APIError } from '../../services/error/APIError.js';

const baseUrl = '/admin/varieties';

export const varietyController = {
    /**
     * Render a list of all varieties from the database
     * @param {Request} request
     * @param {Response} response
     */
    listPage: async function(request, response) {
        const varieties = await varietyDataMapper.findAll();

        if (request.app.locals.event) {
            response.locals.event = request.app.locals.event;

            delete request.app.locals.event;
        }
        
        response.render( 'admin/list', { entities: varieties, title: 'Liste des variétés', field: 'une nouvelle variété' } );
    },

    /**
     * Render a detail page from one specified variety from the database.
     * @param {Request} request
     * @param {Response} response
     */
    detailPage: function (request, response) {
        const variety = request.instance;

        response.render( 'admin/form', {
            title: 'Détail d\'une variété', 
            entity: variety,
            action: 'detail'
        });
    },

    /**
     * Render the form page in order to create a new variety
     * @param {Request} request
     * @param {Response} response
     */
    createPage: function (request, response) {
        response.render( 'admin/form', {
            title: 'Création d\'une nouvelle variété', 
            action: 'create'
        });

    },

    /**
     * Create a new variety in the database and redirect to the list page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    createAction: async function (request, response, next) {
        try {
            const result = await varietyDataMapper.create(request.body);

            request.app.locals.event = {action: 'create', message: result.name + ' a été crée avec succès!!'};

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Render a form with the value of the specified variety
     * @param {Request} request
     * @param {Response} response
     */
    editPage: function (request, response) {
        const variety = request.instance;

        response.render( 'admin/form', {
            title: 'Edition de la variété', 
            entity: variety, 
            action: `${variety.id}/edit`
        });
    },

    /**
     * Update an existing variety with data provided by the form to the database
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    editAction: async function (request, response, next) {
        const varietyFound = request.instance;

        const updatedPlot = { ...varietyFound, ...request.body };

        try {
            const result = await varietyDataMapper.update(updatedPlot);

            request.app.locals.event = {action: 'edit', message: result.name + ' a été édité avec succès!!'};

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Delete an existing variety and redirect to the list page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    deleteAction: async function (request, response, next) {
        const varietyFound = request.instance;

        try {
            const result = await varietyDataMapper.delete(varietyFound);

            request.app.locals.event = {action: 'delete', message: result.name + ' a été supprimé avec succès!!'};

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },
};
