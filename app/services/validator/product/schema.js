import Joi from 'joi';

export const productSchema = Joi.object({ 
    name: Joi.string().required(),
    isAvailable: Joi.boolean().required(),
    image: Joi.string().required(),
    feature: Joi.string().required(),
    trick: Joi.string().required(),
    harvestBeginAt: Joi.date().required(),
    harvestEndAt: Joi.date().required(),
    categoryId: Joi.number().integer()
});
