import { Router } from 'express';
import LoginController from '../controllers/loginController';
import validationUser from '../middlewares/validationUser';

const router = Router();

const loginController = new LoginController();

router.post('/login', validationUser, loginController.login);

export default router;