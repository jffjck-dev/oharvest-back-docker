import { Router} from 'express';
import { varietyController } from '../controllers/varietyController.js';

const varietyRouter = Router();

/**
 * Route : /admin/varieties
 */
varietyRouter.get('/', varietyController.allVariety);

export { varietyRouter };