import { NextFunction, Request, Response } from 'express';
import userSchema from '../schemas/userSchema';
import LoginSchema from '../schemas/loginSchema';

function validationUser(req: Request, res: Response, next: NextFunction) {
  const user = req.body;
  
  const { error } = req.originalUrl === '/users' 
    ? userSchema.validate(user) : LoginSchema.validate(user);
  
  if (error) {
    const [code, message] = error.message.split('|');
    
    return res.status(Number(code)).json({ error: message });
  } 

  next();
}

export default validationUser;