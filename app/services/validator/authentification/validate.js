import { loginSchema } from './schema.js';

export const authValidate = {
    /**
     * Validating middleware which check the body content when the login form is submitted
     * When an error occurs, it renders the login page with additionnal information
     * Otherwise, it go the next middleware
     * @param {Request} request 
     * @param {Response} response 
     * @param {NextFunction} next 
     */
    loginBody(request, response, next){
        const { error } = loginSchema.validate(request.body);

        if(error){
            response.render('authentification/login', { error });
        } else {
            next();
        }
    } 
};