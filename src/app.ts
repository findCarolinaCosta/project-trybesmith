import express from 'express';
import ProductRoutes from './routes/productRoutes';
import UserRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());

app.use(ProductRoutes);
app.use(UserRoutes);

export default app;
