import { CoreDataMapper } from './CoreDataMapper.js';
import pool from '../services/pgClient.js';

export class ProductInPlot extends CoreDataMapper {
    tableName = 'product_in_plot';

    async delete(entity){
        const query = typeof entity === 'number'
            ? `SELECT * FROM ${this.tableName}_delete($1::int)`
            : `SELECT * FROM ${this.tableName}_delete($1::json)`;

        const values = [entity];

        const result = await this.client.query(query, values);

        return result.rows[0];
    }
}

export const productInPlotDataMapper = new ProductInPlot(pool);