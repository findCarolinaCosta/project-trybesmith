import connection from '../models/connection';
import LoginModel from '../models/loginModel';
import IUser from '../interfaces/userInterface';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async login(user: IUser): Promise<IUser> {
    const [userResult] = await this.model.login(user);

    return userResult;
  }
}