import {HouseCreateInput, HouseUpdateInput} from "../types/types";
import {Knex} from "knex";
import MysqlRepository from "./MysqlRepository";

export default class HouseService {
    private db: Knex = (new MysqlRepository()).getClient();

    async getAllHouses() {
        return this.db.select('*').from('houses');
    }

    async getHouse(id: number) {
        return this.db.select('*').from('houses').where({id: id}).first();
    }

    async findBiggestByNumberOfRooms(latitude: number, longitude: number) {
        return this.db.select('*').from('houses').limit(3);
    }

    async findBiggestAndClosest(latitude: number, longitude: number) {
        return this.db.select('*').from('houses')
            .where({
                latitude,
                longitude
            }).limit(5);
    }

    async updateHouse(request: HouseUpdateInput) {
        return this.db('houses').where({id: request.id}).update(request, ['*']);
    }

    async createHouse(request: HouseCreateInput) {
        return this.db.insert(request).into('houses');
    }
}
