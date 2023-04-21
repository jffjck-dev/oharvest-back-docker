import { productDataMapper } from '../../models/Product.js';
import { APIError } from '../../services/error/APIError.js';
import deleteFile from '../../services/file/delete.js';

const baseUrl = '/admin/products';
const viewDirectory = 'product';

/**
     * Syntaxe pour utiliser __dirname dans le cadre de ES6
     */
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const productController = {
    listPage: async function (request, response) {
        const products = await productDataMapper.findAll();
        
        response.render( `${ viewDirectory }/list`, { products } );
    },

    detailPage: async function (request, response, next) {
        const product = request.instance;

        response.render( `${ viewDirectory }/detail`, { product, actionLink: `${ baseUrl }/${product.id}/edit` } );
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
            await productDataMapper.create(request.body);

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    editPage: function (request, response) {
        const product = request.instance;

        response.render( `${ viewDirectory }/edit`, { product, actionLink: `${ baseUrl }/${product.id}/edit` } );
    },

    editAction: async function (request, response, next) {
        const productFound = request.instance;

        const updatedProduct = { ...productFound, ...request.body };

        try {
            await productDataMapper.update(updatedProduct);

            response.redirect( baseUrl );
        } catch(error) {
            console.log(error);
            next(new APIError('Internal server error', 500));
        }
    },

    deleteAction: async function (request, response, next) {
        const productFound = request.instance;
        
        try {
            await productDataMapper.delete(productFound);

            deleteFile(join(__dirname,'../../../public/images/'+ request.instance.image));

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },
};