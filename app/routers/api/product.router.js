import { Router } from 'express';
import { productController } from '../../controllers/api/productController.js';

const apiProductRouter = Router();

/**
 * Route : /api/products
 */
apiProductRouter.get('/', productController.allProduct);
/**
 * Route : /api/products/:id
 */
apiProductRouter.get('/:id', productController.oneProduct);

export { apiProductRouter };