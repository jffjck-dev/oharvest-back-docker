import { Router} from 'express';
import { productController } from '../controllers/productController.js';

const productRouter = Router();

/**
 * Route : /admin/products
 */
productRouter.get('/', productController.allProduct);

export { productRouter };