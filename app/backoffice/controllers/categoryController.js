import { categoryDataMapper } from '../../models/Category.js';
import { APIError } from '../../services/error/APIError.js';

export const categoryController = {
    async listPage(request, response) {
        const categories = await categoryDataMapper.findAll();
        
        response.render( 'category/category', { categories } );
    },

    createPage: function (request, response, next) {
        try {
            response.render( 'category/form', { actionLink: '/admin/categories/create'} );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    createAction: async function (request, response, next) {
        try {
            await categoryDataMapper.create(request.body);

            response.redirect( '/admin/categories' );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    editPage: function (request, response, next) {
        try {
            const category = request.instance;

            response.render( 'category/form', { category, actionLink: `/admin/categories/${category.id}/edit` } );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    editAction: async function (request, response, next) {
        const categoryFound = request.instance;

        const updatedCategory = { ...categoryFound, ...request.body };

        try {
            await categoryDataMapper.update(updatedCategory);

            response.redirect( '/admin/categories' );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    deleteAction: async function (request, response, next) {
        const categoryFound = request.instance;
        console.log(categoryFound);
        try {
            await categoryDataMapper.delete(categoryFound);

            response.redirect( '/admin/categories' );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },
};
