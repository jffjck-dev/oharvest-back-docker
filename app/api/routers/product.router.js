import { Router } from 'express';
import { productController } from '../controllers/productController.js';
import { productMiddleware } from '../../middlewares/productMiddleware.js';

const apiProductRouter = Router();

/** Route : /api/products */
apiProductRouter.get('/', productController.allProduct);

/** Route : /api/products/available */
apiProductRouter.get('/available', productController.allProductAvailable);

/** Middleware called when the param id is present */
apiProductRouter.param('id', productMiddleware.loadProduct);

/** Route : /api/products/:id */
apiProductRouter.get('/:id(\\d+)', productController.oneProduct);

export { apiProductRouter };