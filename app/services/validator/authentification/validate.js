import { loginSchema } from './schema.js';

export const authValidate = {
    loginBody(request, response, next){
        const { error } = loginSchema.validate(request.body);

        if(error){
            console.log(error.details);
            next(error);
        } else {
            next();
        }
    } 
};