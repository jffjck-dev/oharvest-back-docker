import { plotSchema } from './schema.js';

export const plotValidate = {
    /**
     * Validate the body submitted with the corresponding schema
     * If an error occurs, redirect to create page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    create(request, response, next){
        const { error } = plotSchema.validate(request.body);

        if(error){
            response.render('admin/form', { error, title: 'Création d\'une nouvelle parcelle', action: 'create'  });
        } else {
            next();
        }
    },
    
    /**
     * Validate the body submitted with the corresponding schema
     * If an error occurs, redirect to edit page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    edit(request, response, next){
        const { error } = plotSchema.validate(request.body);

        if(error){
            const plot = request.instance;
            response.render('admin/form', { error, title: 'Edition d\'une parcelle', entity: plot, action: `${plot.id}/edit` });
        } else {
            next();
        }
    }
};