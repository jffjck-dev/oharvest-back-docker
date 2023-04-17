import { Router} from 'express';
import { categoryController } from '../../controllers/api/categoryController.js';
import { categoryMiddleware } from '../../middlewares/categoryMiddleware.js';
import { categoryValidate } from '../../services/validator/category/validate.js';

const apiCategoryRouter = Router();

/**
 * Route : /api/categories
 */
apiCategoryRouter.get('/', categoryController.allCategory);
apiCategoryRouter.post('/', categoryValidate.validateBody, categoryController.createCategory);

apiCategoryRouter.param('id', categoryMiddleware.loadCategory);
/**
 * Route : /api/categories/:id
 */
apiCategoryRouter.get('/:id(\\d+)', categoryController.oneCategory);
apiCategoryRouter.put('/:id(\\d+)', categoryValidate.validateBody, categoryController.updateCategory);

export { apiCategoryRouter };