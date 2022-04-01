import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/userInterface';

export default class ProductModel {
  constructor(public connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<IUser> {
    const { username, password, classe, level } = user;

    const INSERTUSER = `INSERT INTO Trybesmith.Users (username, password, classe, level) 
VALUES (?, ?, ?, ?);`;
    const [result] = await this.connection
      .execute<ResultSetHeader>(INSERTUSER, [username, password, classe, level]);
    const { insertId } = result;
    return { id: insertId, ...user };
  }
}