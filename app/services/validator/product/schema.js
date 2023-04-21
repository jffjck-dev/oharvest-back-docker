import Joi from 'joi';

export const productSchema = Joi.object({ 
    name: Joi.string().required(),
    isAvailable: Joi.boolean().required(),
    image: Joi.string().required(),
    description: Joi.string().required(),
    tip: Joi.string().required(),
    harvestBeginAt: Joi.number().integer(),
    harvestEndAt: Joi.number().integer(),
    categoryId: Joi.number().integer()
});
