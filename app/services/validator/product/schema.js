import Joi from 'joi';

/** A validating schema with Joi module for product */
export const productSchema = Joi.object({ 
    name: Joi.string().required().messages({
        'string.empty': 'Le champ "Nom" doit être rempli.',
    }),
    isAvailable: Joi.boolean().required().messages({
        'any.required': 'Merci de préciser la disponibilité du produit'
    }),
    image: Joi.string().required(),
    description: Joi.string().required().messages({
        'string.empty': 'Le champ "Description" doit être rempli.',
    }),
    tip: Joi.string().required().messages({
        'string.empty': 'Le champ "Astuce" doit être rempli.',
    }),
    harvestBeginAt: Joi.number().integer(),
    harvestEndAt: Joi.number().integer(),
    categoryId: Joi.number().integer()
});

/** A validating schema with Joi module for availablility products */
export const updateAvailabilityProductSchema = Joi.object({
    id: Joi.number().required(),
    isAvailable: Joi.boolean().required()
});
