import { productSchema, updateAvailabilityProductSchema } from './schema.js';
import { APIError } from '../../error/APIError.js';

export const productValidate = {
    /**
     * Validate the body submitted with the corresponding schema
     * If an error occurs, redirect to create page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    create(request, response, next){
        const { error } = productSchema.validate(request.body);

        if(error) {
            response.render('admin/form', { error, title: 'Création d\'un nouveau produit', action: 'create'  });
        } else {
            next();
        }
    },

    /**
     * Validate the body submitted with the corresponding schema
     * If an error occurs, redirect to create page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    edit(request, response, next){
        const { error } = productSchema.validate(request.body);

        if(error) {
            const product = request.instance;
            response.render('admin/form', { error, title: 'Edition d\'un produit', entity: product, action: `${product.id}/edit` });
        } else {
            next();
        }
    },

    /**
     * Validate a specified schema for availibity of products
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    validateUpdataAvailable(request, response, next){
        const { error } = updateAvailabilityProductSchema.validate(request.body);

        if(error) {
            next(new APIError(error, 400));
        } else {
            next();
        }
    }
};
