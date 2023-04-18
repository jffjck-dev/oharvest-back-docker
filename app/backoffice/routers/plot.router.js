import { Router} from 'express';
import { plotController } from '../controllers/plotController.js';

const plotRouter = Router();

/**
 * Route : /admin/plots
 */
plotRouter.get('/', plotController.allPlot);

export { plotRouter };