import { CoreDataMapper } from './CoreDataMapper.js';
import pool from '../services/pgClient.js';

export class Booking extends CoreDataMapper {
    tableName = 'booking';

    /**
     * Query the database to find all booking order by date.
     * @returns {Object[]} An array of bookings
     */
    async findAllByDate(){
        const query = `SELECT "visitAt", "slot" FROM ${this.tableName}_select WHERE status != 'refused' AND "visitAt"::date > now()::date ORDER BY "visitAt"`;

        const result = await this.client.query(query);

        return result.rows;
    }

    async findBookingPending(){
        const query = `SELECT * FROM ${this.tableName}_select WHERE status = 'pending' AND "visitAt"::date > now()::date ORDER BY "visitAt"`;

        const result = await this.client.query(query);
        
        return result.rows;
    }
}

export const bookingDataMapper = new Booking(pool);