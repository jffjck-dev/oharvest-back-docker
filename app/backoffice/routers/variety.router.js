import { Router} from 'express';
import { varietyController } from '../controllers/varietyController.js';
import { varietyValidate } from '../../services/validator/variety/validate.js';
import { varietyMiddleware } from '../../middlewares/varietyMiddleware.js';
import { productMiddleware } from '../../middlewares/productMiddleware.js';

const varietyRouter = Router();

/**
 * Route : /admin/varieties
 */
varietyRouter.get('/', varietyController.listPage);
varietyRouter.get('/create', productMiddleware.loadProducts, varietyController.createPage);
varietyRouter.post('/create', varietyValidate.validateBody, varietyController.createAction);

varietyRouter.param('id', varietyMiddleware.loadVariety);
varietyRouter.get('/:id(\\d+)/detail', productMiddleware.loadProducts, varietyController.detailPage);
/**
 * Route : /admin/categories/:id/edit
 */
varietyRouter.get('/:id(\\d+)/edit', productMiddleware.loadProducts, varietyController.editPage);
varietyRouter.post('/:id(\\d+)/edit', varietyValidate.validateBody, varietyController.editAction);

/**
 * Route : /admin/categories/:id/delete
 */
varietyRouter.get('/:id(\\d+)/delete', varietyController.deleteAction);

export { varietyRouter };