import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { IORDER, IORDERSERVICE } from '../interfaces/orderInterface';

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

  public async create(order: IORDERSERVICE): Promise<void> {
    const { userId, products } = order;
    const [insertedOrder] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?);',
      [userId],
    );
    const { insertId } = insertedOrder;

    await Promise.all(products.map(async (productId) => {
      await this.connection.execute(
        'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?;',
        [insertId, productId],
      );
    }));
  }
}