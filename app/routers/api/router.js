import { Router } from 'express';
import { apiCategoryRouter } from './category.router.js';
import { apiPlotRouter } from './plot.router.js';
import { apiProductRouter } from './product.router.js';
import { apiVarietyRouter } from './variety.router.js';

const apiRouter = Router();

apiRouter.use('/categories', apiCategoryRouter);
apiRouter.use('/plots', apiPlotRouter);
apiRouter.use('/products', apiProductRouter);
apiRouter.use('/varieties', apiVarietyRouter);

export { apiRouter };