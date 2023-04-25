export function authMiddleware(request, response, next){
    if(request.session.user){
        next();
    } else {
        response.redirect('/login');
    }
}