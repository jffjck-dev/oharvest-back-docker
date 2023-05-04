import { passwordService } from '../../services/bcrypt.js';

const viewDirectory = 'authentification';

/**
 * Controller dedicated to authentication of the user
 * @method loginPage
 * @method loginAction
 * @method logoutAction
 */
export const authController = {
    /**
     * Render the login page
     * @param {Request} request 
     * @param {Response} response 
     */
    loginPage: function(request, response){
        response.render(`${ viewDirectory }/login`);
    },
    /**
     * Log in the user if validate.
     * Otherwise redirect to the login with error
     * @param {Request} request 
     * @param {Response} response 
     */
    loginAction: async function(request, response){
        const user = request.body;

        const isValidatedPassword = await passwordService.comparePassword(user.password, request.instance.password);

        if(isValidatedPassword){
            request.session.user = user.mail;
            response.redirect('/admin');
        } else {
            const error = {message: 'Utilisateur/mot de passe invalide'};
            response.render('authentification/login', { error });
        }        
    },
    /**
     * Delete the session user
     * @param {Request} request 
     * @param {Response} response 
     */
    logoutAction: function(request, response){
        if(request.session.user){
            delete request.session.user;
        }

        response.redirect('/login');
    },
};