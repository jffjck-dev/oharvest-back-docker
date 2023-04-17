import { CoreDataMapper } from './CoreDataMapper.js';
import pool from '../services/pgClient.js';

export class Product extends CoreDataMapper {
    tableName = 'product';

    /**
     * Query the database to find all products which are available.
     * @returns {Object[]} An array of product
     */
    async findAllProductAvailable(){
        const query = `SELECT * FROM "${this.tableName}_select" "ps" WHERE "ps"."isAvailable" = true`;

        const result = await this.client.query(query);

        return result.rows;
    }
}

export const productDataMapper = new Product(pool);