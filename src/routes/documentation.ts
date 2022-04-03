import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger/swagger.json';

const router = Router();

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default router;