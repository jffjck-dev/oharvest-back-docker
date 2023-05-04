import { Router} from 'express';
import { varietyController } from '../controllers/varietyController.js';
import { varietyValidate } from '../../services/validator/variety/validate.js';
import { varietyMiddleware } from '../../middlewares/varietyMiddleware.js';
import { productMiddleware } from '../../middlewares/productMiddleware.js';

const varietyRouter = Router();

/** Route : /admin/varieties */
varietyRouter.get('/', varietyController.listPage);

/** Route : /admin/varieties/create */
varietyRouter.get('/create', productMiddleware.loadProducts, varietyController.createPage);
varietyRouter.post('/create',productMiddleware.loadProducts, varietyValidate.create, varietyController.createAction);

/** Middleware called when the param id is present */
varietyRouter.param('id', varietyMiddleware.loadVariety);

/** Route : /admin/varieties/:id/detail */
varietyRouter.get('/:id(\\d+)/detail', productMiddleware.loadProducts, varietyController.detailPage);

/** Route : /admin/varieties/:id/edit */
varietyRouter.get('/:id(\\d+)/edit', productMiddleware.loadProducts, varietyController.editPage);
varietyRouter.post('/:id(\\d+)/edit', productMiddleware.loadProducts, varietyValidate.edit, varietyController.editAction);

/** Route : /admin/varieties/:id/delete */
varietyRouter.get('/:id(\\d+)/delete', varietyController.deleteAction);

export { varietyRouter };