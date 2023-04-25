import { CoreDataMapper } from './CoreDataMapper.js';
import pool from '../services/pgClient.js';

class Employee extends CoreDataMapper {
    tableName = 'employee';

    async findOneByMail(mail){
        const query = `SELECT * FROM ${this.tableName}_select WHERE mail=$1 `;
        const values = [mail];

        const result = await this.client.query(query, values);

        return result.rows[0];
    }
}

export const employeeDataMapper = new Employee(pool);