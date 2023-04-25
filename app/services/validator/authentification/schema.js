import Joi from 'joi';

const emailValidator =/^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordValidator = /[a-zA-Z0-9.!#$%&’*+\/=?^_`@{|}~-]+/;

/**
 * LOGIN
*/
const loginSchema = Joi.object({
    mail:Joi
        .string()
        .pattern(emailValidator)
        .required()
        .messages({
            'any.required': 'L\'email doit être renseigné.'
        }),
    password:Joi
        .string()
        .pattern(passwordValidator)
        .required()
        .messages({
            'any.required': 'Le mot de passe doit être renseigné.'
        }) 
});

/**
 * Validation schema for signup
 */
const signUpSchema = Joi.object({
    firstname: Joi
        .string()
        .required()
        .messages({
            'any.required': 'Le prénom doit être renseigné.'
        }),
    lastname: Joi
        .string()
        .required()
        .messages({
            'any.required': 'Le nom doit être renseigné.'
        }),
    mail:Joi
        .string()
        .pattern(emailValidator)
        .required()
        .messages({
            'any.required': 'L\'email doit être renseigné.'
        }),
    password:Joi
        .string()
        .pattern(passwordValidator)
        .required()
        .messages({
            'any.required': 'Le mot de passe doit être renseigné.'
        }),
    confirmation:Joi
        .string()
        .pattern(passwordValidator)
        .required()
        .messages({
            'any.required': 'Merci de confirmer le mot de passe'
        }),
});

export { loginSchema, signUpSchema };