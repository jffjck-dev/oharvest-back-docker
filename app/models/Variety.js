import { CoreDataMapper } from './CoreDataMapper.js';
import pool from '../services/pgClient.js';

export class Variety extends CoreDataMapper{
    tableName = 'variety';
}

export const varietyDataMapper = new Variety(pool);