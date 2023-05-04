/**
 * Verify if the session has a property user which means the user is authenticated.
 * Otherwise redirect to the login page
 * @param {Request} request 
 * @param {Response} response 
 * @param {NextFunction} next 
 */

export const authMiddleware = {
    api(request,response, next){
        const key = request.get('authorization');
        if(!key || key !== process.env.KEY ){
            response.status(401).json('Access refused !');
        } else {
            next();
        }
    },
    back(request, response, next) {
        if ( request.session.user ) {
            next();
        } else {
            response.redirect('/login');
        }
    }
};
