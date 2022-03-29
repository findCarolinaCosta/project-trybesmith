import connection from '../models/connection';
import UserModel from '../models/userModel';
import IUser from '../interfaces/userInterface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(user: IUser): Promise<IUser> {
    return this.model.create(user);
  }
}