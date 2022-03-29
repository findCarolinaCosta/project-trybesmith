import { NextFunction, Request, Response } from 'express';
import productSchema from '../schemas/productSchema';

function validateProduct(req: Request, res: Response, next: NextFunction) {
  const product = req.body;
  const { error } = productSchema.validate(product);

  if (error) {
    const [code, message] = error.message.split('|');
    
    return res.status(parseFloat(code)).json({ error: message });
  }

  next();
}

export default validateProduct;