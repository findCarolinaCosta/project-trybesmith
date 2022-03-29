import connection from '../models/connection';
import ProductModel from '../models/productModel';
import IPRODUCT from '../interfaces/productInterface';

type ITEM = {
  item: IPRODUCT | null
};

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IPRODUCT[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async create(product: IPRODUCT): Promise<ITEM> {
    const id = await this.model.create(product);
    
    return { item: { id, ...product } };
  }
}