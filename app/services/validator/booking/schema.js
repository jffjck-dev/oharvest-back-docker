import Joi from 'joi';

const emailValidator =/^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneValidator =/^(?:(?:\+|00)33[\s.]{0,3}(?:\(0\)[\s.]{0,3})?|0)[1-9](?:(?:[\s.]?\d{2}){4}|\d{2}(?:[\s.]?\d{3}){2})$/;
const zipcodeValidator =/^(0[1-9][0-9]{3}|[1-8][0-9]{4}|9[0-6][0-9]{3}|97[1-8][0-9]{2}|98[46-9][0-9]{2})$/;

/**
 * Validation schema for create
 */
const createSchema = Joi.object({
    visitAt: Joi.date().required(),
    slot: Joi.string().required(),
    name: Joi.string().required(), 
    contact: Joi.string().required(), 
    phone: Joi.string().pattern(phoneValidator).required(),
    mail: Joi.string().pattern(emailValidator).required(), 
    address: Joi.string().required(), 
    city: Joi.string().required(), 
    zipcode: Joi.string().pattern(zipcodeValidator).required(), 
    studentNumber: Joi.number().integer().min(1).max(50), 
    groupNumber: Joi.number().integer().min(1).max(3), 
    guideNumber: Joi.number().integer(), 
    transport: Joi.string().required()
});

/**
 * Validation schema for edit
 */
const editSchema = Joi.object({
    visitAt: Joi.date().required(),
    slot: Joi.string().required(),
    name: Joi.string().required(), 
    contact: Joi.string().required(), 
    phone: Joi.string().pattern(phoneValidator).required(),
    mail: Joi.string().pattern(emailValidator).required(), 
    address: Joi.string().required(), 
    city: Joi.string().required(), 
    zipcode: Joi.string().pattern(zipcodeValidator).required(), 
    studentNumber: Joi.number().integer().min(1).max(50), 
    groupNumber: Joi.number().integer().min(1).max(3), 
    guideNumber: Joi.number().integer(), 
    transport: Joi.string().required(),
    isConfirm: Joi.boolean()
});

export { createSchema, editSchema };