import {Knex} from "knex";
import {HouseCreateInput, HouseUpdateInput} from "../types/types";
import MysqlRepository from "./MysqlRepository";
import HouseNotFoundException from "../exceptions/HouseNotFoundException";

const {omit} = require("lodash");

export default class HouseRepository {
    private tableName: string = 'houses';
    private db: Knex = (new MysqlRepository()).getClient();

    async getAllHouses() {
        return this.db.select('*').from(this.tableName);
    }

    async getHouse(id: number) {
        return this.db.select('*').from(this.tableName).where({id}).first();
    }

    async findBiggestHouses() {
        return this.orderByNumberOfRooms().limit(5);
    }

    async findBiggestAndNewestByLocation(latitude: number, longitude: number) {
        return this.orderByNumberOfRooms()
            .whereRaw(`
              ST_DISTANCE(
                POINT(longitude, latitude),
                POINT(?, ?)
            )`, [longitude, latitude])
            .orderBy('builtDate', 'desc')
            .limit(3);
    }

    async createHouse(data: HouseCreateInput) {
        const insertedIds = await this.db(this.tableName).insert(data);

        return await this.showHouse(insertedIds[0]);
    }

    async updateHouse(data: HouseUpdateInput) {
        await this.db(this.tableName)
            .where('id', data.id)
            .update(omit(data, 'id'));

        return await this.showHouse(data.id);
    }

    async showHouse(id: number) {
        const house = await this.db(this.tableName)
            .select('*')
            .where('id', id)
            .first();

        if (!house) {
            throw new HouseNotFoundException();
        }

        return house;
    }

    private orderByNumberOfRooms() {
        return this.db(this.tableName)
            .select('*')
            .orderBy('numberOfRooms', 'desc');
    }
}
