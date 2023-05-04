import { categorySchema } from './schema.js';

export const categoryValidate = {
    /**
     * Validate the body submitted with the corresponding schema
     * If an error occurs, redirect to create page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    create(request, response, next){
        const { error } = categorySchema.validate(request.body);

        if(error){
            response.render('admin/create', { error, title: 'Création d\'une nouvelle catégorie', action: 'create' });
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
        const { error } = categorySchema.validate(request.body);

        if(error){
            const category = request.instance;
            response.render('admin/form', { error, title: 'Edition d\'une catégorie', entity: category, action: 'edit' });
        } else {
            next();
        }
    }
};