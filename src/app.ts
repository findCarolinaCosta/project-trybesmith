import express from 'express';
import ProductRoutes from './routes/productRoutes';
import UserRoutes from './routes/userRoutes';
import OrderRoutes from './routes/orderRoutes';

const app = express();

app.use(express.json());

app.use(ProductRoutes);
app.use(UserRoutes);
app.use(OrderRoutes);

export default app;
