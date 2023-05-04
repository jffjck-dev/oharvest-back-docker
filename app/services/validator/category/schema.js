import Joi from 'joi';

/** A validating schema with Joi module for category */
export const categorySchema = Joi.object({
    name: Joi
        .string()
        .required()
        .messages({
            'string.empty': 'Le champ doit être rempli.',
        })
});