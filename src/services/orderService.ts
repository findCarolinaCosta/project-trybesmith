import { IORDERSERVICE } from '../interfaces/orderInterface';
import connection from '../models/connection';
import OrderModel from '../models/orderModel';

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

  async create(order: IORDERSERVICE): Promise<void> {
    await this.model.create(order);
  }
}