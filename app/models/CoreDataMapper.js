export class CoreDataMapper{
    /** The table to query */
    tableName;

    constructor(client) {
        this.client = client;
    }

    /**
     * Query the database to return all objects on the specified entity
     * @param {String} order The attribute of the entity
     * @returns {Object[]} An array of objects for the specified entity
     */
    async findAll(order='id'){
        const query = `SELECT * FROM ${this.tableName}_select ORDER BY "${order}"`;

        const result = await this.client.query(query);

        return result.rows;
    }

    /**
     * Query the database to return one specified entity
     * @param {Number} id The id of the entity
     * @returns {Object} An object of the specified entity
     */
    async findOne(id){
        const query = `SELECT * FROM ${this.tableName}_select WHERE id=$1 `;
        const values = [id];

        const result = await this.client.query(query, values);

        return result.rows[0];
    }

    /**
     * Query the database by creating a new entity based with the data submitted
     * @param {Object} entity Mandatory data for creating a new entity
     * @returns {Object} An object of the specified entity
     */
    async create(entity){
        const query = `SELECT * FROM ${this.tableName}_insert($1)`;
        const values = [entity];

        const result = await this.client.query(query, values);
        
        return result.rows[0];
    }

    /**
     * Query the database to update a specified entity
     * @param {Object} entity Mandatory data for updating an entity
     * @returns {Object} An object of the specified entity
     */
    async update(entity){
        const query = `SELECT * FROM ${this.tableName}_update($1)`;
        const values = [entity];

        const result = await this.client.query(query, values);

        return result.rows[0];
    }

    /**
     * Query the database for deleting the submitted entity
     * @param {Object} entity The entity to delete
     * @returns {Object} An object of the specified entity
     */
    async delete(entity){
        const query = `SELECT * FROM ${this.tableName}_delete($1)`;
        const values = [entity];

        const result = await this.client.query(query, values);

        return result.rows[0];
    }
}