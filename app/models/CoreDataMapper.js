export class CoreDataMapper{
    tableName;

    constructor(client) {
        this.client = client;
    }

    async findAll(){
        const query = `SELECT * FROM ${this.tableName}_select`;

        const result = await this.client.query(query);

        return result.rows;
    }

    async findOne(id){
        const query = `SELECT * FROM ${this.tableName}_select WHERE id=$1 `;
        const values = [id];

        const result = await this.client.query(query, values);

        return result.rows[0];
    }

    async create(entity){
        const query = `SELECT * FROM ${this.tableName}_insert($1)`;
        const values = [entity];

        const result = await this.client.query(query, values);
        
        return result.rows[0];
    }

    async update(entity){
        const query = `SELECT * FROM ${this.tableName}_update($1)`;
        const values = [entity];

        const result = await this.client.query(query, values);

        return result.rows[0];
    }
}