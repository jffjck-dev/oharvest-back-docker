import Joi from 'joi';

export const varietySchema = Joi.object({ 
    name: Joi.string().required(),
    harvestBeginAt: Joi.date().required(),
    harvestEndAt: Joi.date().required(),
    productId: Joi.number().integer()
});