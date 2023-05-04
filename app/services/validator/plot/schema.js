import Joi from 'joi';

/** A validating schema with Joi module for plot */
export const plotSchema = Joi.object({
    name: Joi.string()
        .required()
        .messages({
            'string.empty': 'Le champ Nom doit être rempli.',
        })
});