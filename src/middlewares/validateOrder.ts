import { NextFunction, Request, Response } from 'express';
import orderSchema from '../schemas/orderSchema';

function validationOrder(req: Request, res: Response, next: NextFunction) {
  const { products } = req.body;
  
  const { error } = orderSchema.validate({ products });
  
  if (error) {
    const [code, message] = error.message.split('|');
    
    return res.status(Number(code)).json({ error: message });
  } 

  next();
}

export default validationOrder;