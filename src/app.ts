import express from 'express';
import ProductRoutes from './routes/productRoutes';

const app = express();

app.use(express.json());
app.use(ProductRoutes);

export default app;
