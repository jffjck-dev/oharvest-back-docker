import { productDataMapper } from '../../models/Product.js';

export const productController = {
    async allProduct(request, response) {
        const products = await productDataMapper.findAll();
        
        response.render( 'product/product', { products } );
    }
};