import { CoreDataMapper } from './CoreDataMapper.js';
import pool from '../services/pgClient.js';

export class Booking extends CoreDataMapper {
    tableName = 'booking';

    async findAllByDate(){
        const query = `SELECT "visitAt", "slot" FROM ${this.tableName}_select WHERE status != 'refused' AND "visitAt"::date > now()::date ORDER BY "visitAt"`;

        const result = await this.client.query(query);

        return result.rows;
    }
}

export const bookingDataMapper = new Booking(pool);