import { loggerService } from '../logger/logger.js';
import { APIError } from './APIError.js';

const apiRegExp = new RegExp(/^(\/api.+)$/);

export const errorHandling = {
    /**
     * Function that send a json error message with the corresponded status code.
     * @param {APIError} error
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    async manage(error, request, response, next){
        try {
            await loggerService.write(request, error);    
        } catch (error) {
            console.log(error);
        }

        if(request.url === '/api' && !request.session.user){
            return response.redirect('/docs/api');
        }

        if(!request.url.match(apiRegExp) && !request.session.user){
            return response.redirect('/login');
        }

        if(request.session.user){
            return response.render('notFound');
        }
        
        switch (error.statusCode) {
        case 400:
            response.status(400).json('Bad request');
            break;
        case 404:
            response.status(404).json('Element not found');
            break;
        default:
            response.status(error.statusCode).json('Internal server error');
            break;
        }
    },
    notFound(request, response, next){
        next(new APIError('Not found', 404));
    },
};