import { Router} from 'express';
import { varietyController } from '../controllers/varietyController.js';
import { varietyMiddleware } from '../../middlewares/varietyMiddleware.js';

const apiVarietyRouter = Router();

/** Route : /api/varieties */
apiVarietyRouter.get('/', varietyController.allVariety);

/** Middleware called when the param id is present */
apiVarietyRouter.param('id', varietyMiddleware.loadVariety);

/** Route : /api/varieties/:id */
apiVarietyRouter.get('/:id(\\d+)', varietyController.oneVariety);

export { apiVarietyRouter };