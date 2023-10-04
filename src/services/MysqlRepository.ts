import knex, {Knex} from "knex";
const knexConfig = require('../../knexfile');

export default class MysqlRepository {
    private client: Knex = knex(knexConfig.development);

    public getClient() {
        return this.client;
    }
}