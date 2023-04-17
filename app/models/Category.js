import { CoreDataMapper } from './CoreDataMapper.js';
import pool from '../services/pgClient.js';

class Category extends CoreDataMapper {
    tableName = 'category';
}

export const categoryDataMapper = new Category(pool);