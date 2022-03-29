import { Request, Response } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  constructor(private postService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.postService.getAll();
    return res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const postCreated = await this.postService.create(product);

    return res.status(201).json(postCreated);
  };
}