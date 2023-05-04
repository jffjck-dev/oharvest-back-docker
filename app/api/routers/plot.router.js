import { Router} from 'express';
import { plotController } from '../controllers/plotController.js';
import { productInPlotController } from '../controllers/productInPlotController.js';
import { plotMiddleware } from '../../middlewares/plotMiddleware.js';

const apiPlotRouter = Router();

/** Route /api/plots */
apiPlotRouter.get('/', plotController.allPlot);

/** Middleware called when the param id is present */
apiPlotRouter.param('id', plotMiddleware.loadPlot);

/** Route : /api/plots/:id */
apiPlotRouter.get('/:id(\\d+)', plotController.onePlot);

/** Route : /api/plots/products */
apiPlotRouter.get('/products', productInPlotController.allProductsInPlot);

export { apiPlotRouter };