import { Router } from 'express';
import { productController } from '../controllers/productController.js';
import { productValidate } from '../../services/validator/product/validate.js';
import { productMiddleware } from '../../middlewares/productMiddleware.js';
import { categoryMiddleware } from '../../middlewares/categoryMiddleware.js';
import { uploadMiddleware } from '../../middlewares/uploadMiddleware.js';
import { upload } from '../../services/multer.js';

const productRouter = Router();

/**
 * Route : /admin/products
 */
productRouter.get('/', productController.listPage);
productRouter.get('/create', categoryMiddleware.loadCategories,  productController.createPage);
productRouter.post('/create', upload.single('image'), uploadMiddleware.insertImageName, productValidate.validateBody,  productController.createAction);

productRouter.param('id', productMiddleware.loadProduct);
productRouter.get('/:id(\\d+)/detail', categoryMiddleware.loadCategories, productController.detailPage);
/**
 * Route : /admin/products/:id/edit
 */
productRouter.get('/:id(\\d+)/edit', categoryMiddleware.loadCategories, productController.editPage);
productRouter.post('/:id(\\d+)/edit', upload.single('image'), uploadMiddleware.insertImageName, productValidate.validateBody, productController.editAction);

/**
 * Route : /admin/products/:id/delete
 */
productRouter.get('/:id(\\d+)/delete', productController.deleteAction);

/**
 * Route : /admin/products/available
 */
productRouter.post('/available', productValidate.validateUpdataAvailable, productController.editAvailableAction);

export { productRouter };