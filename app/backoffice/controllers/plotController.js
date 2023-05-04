import { plotDataMapper } from '../../models/Plot.js';
import { APIError } from '../../services/error/APIError.js';
import { productInPlotDataMapper } from '../../models/ProductInPlot.js';

const baseUrl = '/admin/plots';

export const plotController = {
    /**
     * Render a list of all plots from the database
     * @param {Request} request
     * @param {Response} response
     */
    listPage: async function(request, response) {
        const plots = await plotDataMapper.findAll();

        if (request.app.locals.event) {
            response.locals.event = request.app.locals.event;

            delete request.app.locals.event;
        }

        // response.render( `${ viewDirectory }/list`, { plots } );
        response.render( 'admin/list', { entities: plots, title: 'Liste des parcelles', field: 'une nouvelle parcelle' } );
    },

    /**
     * Render a detail page from one specified plot from the database.
     * @param {Request} request
     * @param {Response} response
     */
    detailPage: async function (request, response) {
        const plot = request.instance;

        response.render( 'admin/form', {
            title: 'Détail de la parcelle', 
            entity: plot, 
            action: 'detail'
        });
    },

    /**
     * Render the form page in order to create a new plot
     * @param {Request} request
     * @param {Response} response
     */
    createPage: function (request, response) {
        response.render( 'admin/form', {title: 'Creation d\'une nouvelle parcelle', action: 'create'});
    },

    /**
     * Create a new plot in the database and redirect to the list page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    createAction: async function (request, response, next) {
        try {
            const result = await plotDataMapper.create(request.body);

            request.app.locals.event = {action: 'create', message: result.name + ' a été crée avec succès!!'};

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Render a form with the value of the specified plot
     * @param {Request} request
     * @param {Response} response
     */
    editPage: function (request, response) {
        const plot = request.instance;

        // response.render( `${ viewDirectory }/edit`, { plot } );
        response.render( 'admin/form', {
            title: 'Edition de la parcelle', 
            entity: plot, 
            action: `${plot.id}/edit`
        });
    },

    /**
     * Update an existing plot with data provided by the form to the database
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    editAction: async function (request, response, next) {
        const plotFound = request.instance;

        const updatedPlot = { ...plotFound, ...request.body };

        try {
            const result = await plotDataMapper.update(updatedPlot);

            request.app.locals.event = {action: 'edit', message: result.name + ' a été édité avec succès!!'};

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Delete an existing plot and redirect to the list page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    deleteAction: async function (request, response, next) {
        const plotFound = request.instance;

        try {
            const result = await plotDataMapper.delete(plotFound);

            request.app.locals.event = {action: 'delete', message: result.name + ' a été supprimé avec succès!!'};

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Render the list of all products associated to their corresponding plots
     * @param {Request} request
     * @param {Response} response
     */
    productsPage: async function (request, response) {
        const plots = await productInPlotDataMapper.findAll();

        // response.render( `${ viewDirectory }/product/list`, { plots } );
        response.render( 'admin/list', {
            entities: plots,
            title: 'Liste des parcelles avec leurs produits',
            field: 'produit',
            hideCreateAction: true,
            hideListActions: true,
            modals: ['plot/product/modal'],
            scripts: ['/js/productInPlot.js']
        });
    },

    /**
     * Adding a specified product to a selected plot
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    addProductAction: async function (request, response, next) {
        try{
            const updateProductInPlot = await productInPlotDataMapper.create(request.body);

            response.json(updateProductInPlot);
        } catch (error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Remove a specified product to the corresponding plot
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    removeProductAction: async function (request, response, next) {
        try{
            const updateProductInPlot = await productInPlotDataMapper.delete(request.body);

            response.json(updateProductInPlot);
        } catch (error) {
            next(new APIError('Internal server error', 500));
        }
    }
};
