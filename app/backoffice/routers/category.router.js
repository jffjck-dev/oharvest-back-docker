import { Router} from 'express';
import { categoryController } from '../controllers/categoryController.js';
import { categoryValidate } from '../../services/validator/category/validate.js';
import { categoryMiddleware } from '../../middlewares/categoryMiddleware.js';

const categoryRouter = Router();

/**
 * Route : /admin/categories
 */
categoryRouter.get('/', categoryController.listPage);
categoryRouter.get('/create', categoryController.createPage);
categoryRouter.post('/create', categoryValidate.validateBody, categoryController.createAction);

categoryRouter.param('id', categoryMiddleware.loadCategory);
categoryRouter.get('/:id(\\d+)/detail', categoryController.detailPage);
/**
 * Route : /admin/categories/:id/edit
 */
categoryRouter.get('/:id(\\d+)/edit', categoryController.editPage);
categoryRouter.post('/:id(\\d+)/edit', categoryValidate.validateBody, categoryController.editAction);

/**
 * Route : /admin/categories/:id/delete
 */
categoryRouter.get('/:id(\\d+)/delete', categoryController.deleteAction);

export { categoryRouter };