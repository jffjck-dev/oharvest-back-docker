import { passwordService } from '../../services/bcrypt.js';

const viewDirectory = 'authentification';

export const authController = {
    loginPage: function(request, response){
        response.render(`${ viewDirectory }/login`);
    },
    loginAction: async function(request, response){
        const user = request.body;

        const isValidatedPassword = await passwordService.comparePassword(user.password, request.instance.password);

        if(isValidatedPassword){
            request.session.user = user.mail;
            response.redirect('/admin');
        } else {
            response.redirect('/login');
        }        
    },
    logoutAction: function(request, response){
        if(request.session.user){
            delete request.session.user;
            return response.redirect('/login');
        }
    },
};
