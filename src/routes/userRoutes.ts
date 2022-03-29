import { Router } from 'express';
import UserController from '../controllers/userController';
import validationUser from '../middlewares/validationUser';

const router = Router();

const userController = new UserController();

router.post('/users', validationUser, userController.create);

export default router;