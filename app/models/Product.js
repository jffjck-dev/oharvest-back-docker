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

    async updateProductAvailability(product){
        const query = `SELECT * FROM ${this.tableName}_update($1, $2)`;
        const values = [product.id, product.isAvailable];

        const result = await this.client.query(query, values);

        return result.rows[0];
    }
}

export const productDataMapper = new Product(pool);