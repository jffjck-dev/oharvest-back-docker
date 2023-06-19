/**
 * Verify if the session has a property user which means the user is authenticated.
 * Otherwise redirect to the login page
 * @param {Request} request 
 * @param {Response} response 
 * @param {NextFunction} next 
 */

export const authMiddleware = {
    back(request, response, next) {
        if ( request.session.user ) {
            next();
        } else {
            response.redirect('/login');
        }
    }
};
