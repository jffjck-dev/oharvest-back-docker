import { employeeDataMapper } from '../models/Employee.js';
import { APIError } from '../services/error/APIError.js';

export const employeeMiddleware = {
    /**
    * Load an employee inside the request object
    * If the item exist, stock inside request.instance
    * Otherwise, send an error with status 400.
    * @param {Request} request 
    * @param {Response} response 
    * @param {NextFunction} next
    */
    async loadEmployee(request, response, next){
        
        try {
            const employeeFound = await employeeDataMapper.findOneByMail(request.body.mail);

            if (employeeFound) {
                request.instance = employeeFound;
                next();
            } else {
                const error = { message: 'Utilisateur/mot de passe invalide' };
                response.render('authentification/login', { error });
            }
        } catch(error){
            next(new APIError('Internal server error', 500));
        }       
    }
};

