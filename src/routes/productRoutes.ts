import { Router } from 'express';
import ProductController from '../controllers/productController';
import validateProduct from '../middlewares/validateProduct';

const router = Router();

const productController = new ProductController();

router.get('/products', productController.getAll);
router.post('/products/', validateProduct, productController.create);

export default router;