import { varietySchema } from './schema.js';

export const varietyValidate = {
    /**
     * Validate the body submitted with the corresponding schema
     * If an error occurs, redirect to create page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    create(request, response, next){
        const { error } = varietySchema.validate(request.body);

        if(error) {
            response.render('admin/form', { error, title: 'Création d\'une nouvelle variété', action: 'create'  });
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
        const { error } = varietySchema.validate(request.body);

        if(error) {
            const variety = request.instance;
            response.render('admin/form', { error, title: 'Edition de la variété', entity: variety, action: `${variety.id}/edit` });
        } else {
            next();
        }
    }
};