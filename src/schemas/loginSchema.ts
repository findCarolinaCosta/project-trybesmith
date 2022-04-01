import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required().messages({
    // status code | message
    'any.required': '400|Username is required',
  }),
  password: Joi.string().required().messages({
    'any.required': '400|Password is required',
  }),
});

export default loginSchema;