import { categoryDataMapper } from '../../models/Category.js';
import { APIError } from '../../services/error/APIError.js';

const baseUrl = '/admin/categories';
const viewDirectory = 'category';

export const categoryController = {
    listPage: async function (request, response) {
        const categories = await categoryDataMapper.findAll();
        
        response.render( `${ viewDirectory }/list`, { categories } );
    },

    detailPage: async function (request, response, next) {
        const category = request.instance;

        response.render( `${ viewDirectory }/detail`, { category, actionLink: `${ baseUrl }/${category.id}/edit` } );
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
            await categoryDataMapper.create(request.body);

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    editPage: function (request, response, next) {
        try {
            const category = request.instance;

            response.render( `${ viewDirectory }/edit`, { category, actionLink: `${ baseUrl }/${category.id}/edit` } );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    editAction: async function (request, response, next) {
        const categoryFound = request.instance;

        const updatedCategory = { ...categoryFound, ...request.body };

        try {
            await categoryDataMapper.update(updatedCategory);

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    deleteAction: async function (request, response, next) {
        const categoryFound = request.instance;
        console.log(categoryFound);
        try {
            await categoryDataMapper.delete(categoryFound);

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },
};
