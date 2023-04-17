import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from '../services/swagger.js';

const swaggerRouter = Router();

swaggerRouter.use('/', swaggerUi.serve);
swaggerRouter.get('/', swaggerUi.setup(swaggerDocument));

export { swaggerRouter };
