import { Request, Response } from 'express';
import UserService from '../services/userService';
import { createToken } from '../utils/jwtGenerator';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);

    const token = createToken({ 
      id: userCreated.id, 
      username: userCreated.username, 
      classe: userCreated.classe, 
    });

    return res.status(201).json({ token });
  };
}