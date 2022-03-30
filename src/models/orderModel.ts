import { Pool, RowDataPacket } from 'mysql2/promise';
import { IORDER } from '../interfaces/orderInterface';

export default class OrderModel {
  constructor(public connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IORDER[]> {
    const selectOrderWithProducts = `
  SELECT o.id, o.userId, p.id AS products
  FROM Trybesmith.Orders AS o
  LEFT JOIN Trybesmith.Products AS p ON p.orderId = o.id;`;
    const [result] = await this.connection
      .execute<RowDataPacket[]>(selectOrderWithProducts);
    return result as IORDER[];
  }
}