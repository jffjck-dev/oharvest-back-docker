import { Router} from 'express';
import { categoryController } from '../controllers/categoryController.js';
import { categoryMiddleware } from '../../middlewares/categoryMiddleware.js';

const apiCategoryRouter = Router();

/** Route : /api/categories */
apiCategoryRouter.get('/', categoryController.allCategory);

/** Middleware called when the param id is present */
apiCategoryRouter.param('id', categoryMiddleware.loadCategory);

/** Route : /api/categories/:id */
apiCategoryRouter.get('/:id(\\d+)', categoryController.oneCategory);

export { apiCategoryRouter };