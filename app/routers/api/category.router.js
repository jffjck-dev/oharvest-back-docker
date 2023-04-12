import { Router} from 'express';
import { categoryController } from '../../controllers/api/categoryController.js';

const apiCategoryRouter = Router();

/**
 * Route : /api/categories
 */
apiCategoryRouter.get('/', categoryController.allCategory);
/**
 * Route : /api/categories/:id
 */
apiCategoryRouter.get('/:id', categoryController.oneCategory);

export { apiCategoryRouter };