import Joi from 'joi';

export const plotSchema = Joi.object({
    name: Joi.string().required()
});