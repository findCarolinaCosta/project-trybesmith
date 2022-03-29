import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  public async create(product: IPRODUCT): Promise<number> {
    const { name, amount } = product;
    const INSERTPRODUCT = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';
    const arrayDependencies = [name, amount];
    const [result] = await this.connection.execute<ResultSetHeader>(
      INSERTPRODUCT, 
      arrayDependencies,
    );
    const { insertId } = result;
    return insertId;
  }
}