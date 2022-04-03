import express, { Request, Response } from 'express';
import ProductRoutes from './routes/productRoutes';
import UserRoutes from './routes/userRoutes';
import OrderRoutes from './routes/orderRoutes';
import LoginRoutes from './routes/loginRoutes';
import documentation from './routes/documentation';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => { res.redirect('/docs'); });

app.use(documentation);
app.use(ProductRoutes);
app.use(UserRoutes);
app.use(OrderRoutes);
app.use(LoginRoutes);

export default app;
