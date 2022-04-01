import { Router } from 'express';
import OrderController from '../controllers/orderController';
import validationToken from '../middlewares/validateToken';
import validationOrder from '../middlewares/validateOrder';

const router = Router();

const orderController = new OrderController();

router.get('/orders', orderController.getAll);
router.post('/orders', validationToken, validationOrder, orderController.create);

export default router;