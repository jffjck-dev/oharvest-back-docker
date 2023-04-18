import { CoreDataMapper } from './CoreDataMapper.js';
import pool from '../services/pgClient.js';

export class ProductInPlot extends CoreDataMapper {
    tableName = 'product_in_plot';
}

export const productInPlotDataMapper = new ProductInPlot(pool);