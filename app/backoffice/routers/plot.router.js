import { Router} from 'express';
import { plotController } from '../controllers/plotController.js';
import { plotMiddleware } from '../../middlewares/plotMiddleware.js';
import { plotValidate } from '../../services/validator/plot/validate.js';

const plotRouter = Router();

/**
 * Route : /admin/plots
 */
plotRouter.get('/', plotController.listPage);
plotRouter.get('/create', plotController.createPage);
plotRouter.post('/create', plotValidate.validateBody, plotController.createAction);

plotRouter.get('/products', plotController.productsPage);
plotRouter.post('/products/delete', plotController.removeProductAction);
plotRouter.post('/products/add', plotController.addProductAction);

plotRouter.param('id', plotMiddleware.loadPlot);
plotRouter.get('/:id(\\d+)/detail', plotController.detailPage);
/**
 * Route : /admin/categories/:id/edit
 */
plotRouter.get('/:id(\\d+)/edit', plotController.editPage);
plotRouter.post('/:id(\\d+)/edit', plotValidate.validateBody, plotController.editAction);

/**
 * Route : /admin/categories/:id/delete
 */
plotRouter.get('/:id(\\d+)/delete', plotController.deleteAction);

export { plotRouter };