import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import { IORDERSERVICE } from '../interfaces/orderInterface';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<IORDERSERVICE[]> {
    const result = await this.model.getAll();
    
    const orders = result.map((order) => ({
      ...order,
      products: [order.products],
    }));

    return orders;
  }
}