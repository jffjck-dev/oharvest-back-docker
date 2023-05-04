import { categoryDataMapper } from '../../models/Category.js';
import { APIError } from '../../services/error/APIError.js';

const baseUrl = '/admin/categories';

export const categoryController = {
    /**
     * Render a list of all categories from the database
     * @param {Request} request
     * @param {Response} response
     */
    listPage: async function (request, response) {
        const categories = await categoryDataMapper.findAll();
        
        if (request.app.locals.event) {
            response.locals.event = request.app.locals.event;

            delete request.app.locals.event;
        }

        response.render( 'admin/list', { entities: categories, title: 'Liste des catégories', field: 'une nouvelle catégorie' } );
    },

    /**
     * Render a detail page from one specified category from the database.
     * @param {Request} request
     * @param {Response} response
     */
    detailPage: async function (request, response) {
        const category = request.instance;

        response.render( 'admin/form', {
            title: 'Détail d\'une catégorie', 
            entity: category,
            action: 'detail'
        });
    },

    /**
     * Render the form page in order to create a new category
     * @param {Request} request
     * @param {Response} response
     */
    createPage: function (request, response) {
        response.render( 'admin/form', {title: 'Création d\'une nouvelle catégorie', action: 'create'} );
    },

    /**
     * Create a new category in the database and redirect to the list page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    createAction: async function (request, response, next) {
        try {
            const result = await categoryDataMapper.create(request.body);

            request.app.locals.event = {action: 'create', message: result.name + ' a été crée avec succès!!'};

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Render a form with the value of the specified category
     * @param {Request} request
     * @param {Response} response
     */
    editPage: function (request, response) {
        const category = request.instance;

        response.render( 'admin/form', { 
            title: 'Edition de la catégorie',
            entity: category,
            action: `${category.id}/edit`
        });
        
    },

    /**
     * Update an existing category with data provided by the form to the database
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    editAction: async function (request, response, next) {
        const categoryFound = request.instance;

        const updatedCategory = { ...categoryFound, ...request.body };

        try {
            const result = await categoryDataMapper.update(updatedCategory);

            request.app.locals.event = {action: 'edit', message: result.name + ' a été édité avec succès!!'};

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Delete an existing category and redirect to the list page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    deleteAction: async function (request, response, next) {
        const categoryFound = request.instance;

        try {
            const result = await categoryDataMapper.delete(categoryFound);

            request.app.locals.event = {action: 'delete', message: result.name + ' a été supprimé avec succès!!'};

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },
};