import { Request, Response } from 'express';
import LoginService from '../services/loginService';
import jwtGenerator from '../utils/jwtGenerator';

export default class LoginController {
  constructor(private loginService = new LoginService()) { }

  public login = async (req: Request, res: Response) => {
    const user = req.body;

    const resultUser = await this.loginService.login(user);
    
    if (!resultUser) {
      return res.status(401).json({ error: 'Username or password invalid' });
    }

    const token = jwtGenerator({
      id: resultUser.id,
      username: resultUser.username,
      classe: resultUser.classe, 
    });

    return res.status(200).json({ token });
  };
}