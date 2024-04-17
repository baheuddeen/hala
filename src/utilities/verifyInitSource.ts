import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  init_source: Joi.string().required().max(100),
});

export default function verifySignup(req: Request, res: Response, next: NextFunction) {    
  const error = schema.validate(req.body).error;
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
}