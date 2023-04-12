import { Router} from 'express';
import { varietyController } from '../../controllers/api/varietyController.js';

const apiVarietyRouter = Router();

/**
 * Route : /api/varieties
 */
apiVarietyRouter.get('/', varietyController.allVariety);
/**
 * Route : /api/varieties/:id
 */
apiVarietyRouter.get('/:id', varietyController.oneVariety);

export { apiVarietyRouter };