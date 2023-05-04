import { Router} from 'express';
import { plotController } from '../controllers/plotController.js';
import { plotMiddleware } from '../../middlewares/plotMiddleware.js';
import { plotValidate } from '../../services/validator/plot/validate.js';

const plotRouter = Router();

/** Route : /admin/plots */
plotRouter.get('/', plotController.listPage);

/** Route : /admin/plots/create */
plotRouter.get('/create', plotController.createPage);
plotRouter.post('/create', plotValidate.create, plotController.createAction);

/** Route : /admin/plots/products */
plotRouter.get('/products', plotController.productsPage);

/** Route : /admin/plots/products/delete */
plotRouter.post('/products/delete', plotController.removeProductAction);

/** Route : /admin/plots/products/add */
plotRouter.post('/products/add', plotController.addProductAction);

/** Middleware called when the param id is present */
plotRouter.param('id', plotMiddleware.loadPlot);

/** Route : /admin/plots/:id/detail */
plotRouter.get('/:id(\\d+)/detail', plotController.detailPage);

/** Route : /admin/plots/:id/edit */
plotRouter.get('/:id(\\d+)/edit', plotController.editPage);
plotRouter.post('/:id(\\d+)/edit', plotValidate.edit, plotController.editAction);

/** Route : /admin/plots/:id/delete */
plotRouter.get('/:id(\\d+)/delete', plotController.deleteAction);

export { plotRouter };