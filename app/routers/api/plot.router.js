import { Router} from 'express';
import { plotController } from '../../controllers/api/plotController.js';

const apiPlotRouter = Router();

/**
 * Route /api/plots
 */
apiPlotRouter.get('/', plotController.allPlot);
/**
 * Route : /api/plots/:id
 */
apiPlotRouter.get('/:id', plotController.onePlot);

export { apiPlotRouter };