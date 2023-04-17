import { Router} from 'express';
import { varietyController } from '../../controllers/api/varietyController.js';
import { varietyMiddleware } from '../../middlewares/varietyMiddleware.js';
import { varietyValidate } from '../../services/validator/variety/validate.js';

const apiVarietyRouter = Router();

/**
 * Route : /api/varieties
 */
apiVarietyRouter.get('/', varietyController.allVariety);
apiVarietyRouter.post('/', varietyValidate.validateBody, varietyController.createVariety);

apiVarietyRouter.param('id', varietyMiddleware.loadVariety);
/**
 * Route : /api/varieties/:id
 */
apiVarietyRouter.get('/:id(\\d+)', varietyController.oneVariety);
apiVarietyRouter.put('/:id(\\d+)', varietyValidate.validateBody, varietyController.updateVariety);

export { apiVarietyRouter };