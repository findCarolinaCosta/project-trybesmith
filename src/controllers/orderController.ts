import { Request, Response } from 'express';
import OrderService from '../services/orderService';

export default class ProductController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    
    return res.status(200).json(orders);
  };

  create = async (req: Request, res: Response) => {
    const { products, userId } = req.body;

    const order = { userId, products };
  
    await this.orderService.create(order);
  
    return res.status(201).json({ order });
  };
}