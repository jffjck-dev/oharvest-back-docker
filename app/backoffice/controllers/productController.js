import { productDataMapper } from '../../models/Product.js';
import { APIError } from '../../services/error/APIError.js';
import deleteFile from '../../services/file/delete.js';
import { productInPlotDataMapper } from '../../models/ProductInPlot.js';

const baseUrl = '/admin/products';

/**
 * Syntaxe pour utiliser __dirname dans le cadre de ES6
 */
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const productController = {
    /**
     * Render a list of all products from the database
     * @param {Request} request
     * @param {Response} response
     */
    listPage: async function (request, response) {
        const products = await productDataMapper.findAll();

        if (request.app.locals.event) {
            response.locals.event = request.app.locals.event;

            delete request.app.locals.event;
        }
        
        // response.render( `${ viewDirectory }/list`, { products } );
        response.render( 'admin/list', {
            entities: products,
            title: 'Liste des produits',
            field: 'un nouveau produit',
            scripts: ['/js/checkAvailability.js']
        } );
    },

    /**
     * Render a detail page from one specified product from the database.
     * @param {Request} request
     * @param {Response} response
     */
    detailPage: async function (request, response) {
        const product = request.instance;

        response.render( 'admin/form', {
            title: 'Détail d\'un produit', 
            entity: product,
            action: 'detail'
        });
    },

    /**
     * Render the form page in order to create a new product
     * @param {Request} request
     * @param {Response} response
     */
    createPage: function (request, response) {
        // response.render( `${ viewDirectory }/create`);
        response.render( 'admin/form', {
            title: 'Création d\'un nouveau produit',
            action: 'create'
        } );
    },

    /**
     * Create a new product in the database and redirect to the list page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    createAction: async function (request, response, next) {
        try {
            const result = await productDataMapper.create(request.body);

            request.app.locals.event = {action: 'create', message: result.name + ' a été crée avec succès!!'};

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Render a form with the value of the specified product
     * @param {Request} request
     * @param {Response} response
     */
    editPage: function (request, response) {
        const product = request.instance;

        // response.render( `${ viewDirectory }/edit`, { product } );
        response.render( 'admin/form', {
            title: 'Modification d\'un produit', 
            entity: product,
            action: `${product.id}/edit`
        });
        
    },

    /**
     * Update an existing product with data provided by the form to the database
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    editAction: async function (request, response, next) {
        const productFound = request.instance;

        const updatedProduct = { ...productFound, ...request.body };

        try {
            const result = await productDataMapper.update(updatedProduct);

            request.app.locals.event = {action: 'edit', message: result.name + ' a été édité avec succès!!'};

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Delete an existing product and redirect to the list page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    deleteAction: async function (request, response, next) {
        const productFound = request.instance;
        
        try {
            const result = await productDataMapper.delete(productFound);

            deleteFile(join(__dirname,'../../../public/images/'+ request.instance.image));

            request.app.locals.event = {action: 'delete', message: result.name + ' a été supprimé avec succès!!'};

            response.redirect( baseUrl );
        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Edit the availability of products on list page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    editAvailableAction: async function(request, response, next){
        try {
            const id = parseInt(request.body.id);

            const updatedProduct = await productDataMapper.updateProductAvailability(request.body);

            const productInPlotUpdated = !request.body.isAvailable
                ? await productInPlotDataMapper.delete(id)
                : true;

            if(updatedProduct && productInPlotUpdated){
                response.status(200).json(updatedProduct);
            }

        } catch (error){
            next(new APIError('Internal server error', 500));
        }
    }
};