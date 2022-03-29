import { Pool } from 'mysql2/promise';
import IPRODUCT from '../interfaces/productInterface';

export default class ProductModel {
  constructor(public connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IPRODUCT[]> {
    const [products] = await this.connection
      .execute('SELECT * FROM Trybesmith.Products;');
    return products as IPRODUCT[];
  }

}