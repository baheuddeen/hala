import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  user_name: Joi.string().required().max(100),
  email: Joi.string().required().max(100).email(),
  phone: Joi.string().min(10).max(10).required(),
  car_type: Joi.string().required(),
  car_model: Joi.string().required(),
});

export default function verifySignup(req: Request, res: Response, next: NextFunction) {    
  const error = schema.validate(req.body).error;
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
}