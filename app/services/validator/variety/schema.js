import Joi from 'joi';

export const varietySchema = Joi.object({ 
    name: Joi.string().required(),
    description: Joi.string().required(),
    harvestBeginAt: Joi.number().integer(),
    harvestEndAt: Joi.number().integer(),
    productId: Joi.number().integer()
});