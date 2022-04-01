import { Pool } from 'mysql2/promise';
import IUser from '../interfaces/userInterface';

export default class LoginModel {
  constructor(public connection: Pool) {
    this.connection = connection;
  }

  public async login(user: IUser): Promise<IUser[]> {
    const { username, password } = user;

    const SELECTUSER = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
    const [result] = await this.connection
      .execute(SELECTUSER, [username, password]);
    
    return result as IUser[];
  }
}