import Joi from 'joi';

/** A validating schema with Joi module for variety */
export const varietySchema = Joi.object({ 
    name: Joi.string()
        .required()
        .messages({
            'string.empty': 'Le champ "Nom" doit être rempli.',
        }),
    description: Joi
        .string()
        .required()
        .messages({
            'string.empty': 'Le champ "Description" doit être rempli.',
        }),
    harvestBeginAt: Joi.number().integer(),
    harvestEndAt: Joi.number().integer(),
    productId: Joi.number().integer()
});