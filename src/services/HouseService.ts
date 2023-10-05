import {HouseCreateInput, HouseUpdateInput} from "../types/types";
import knex, {Knex} from "knex";
import MysqlRepository from "./MysqlRepository";

// const getAllHouses = async () =>
//     await db('houses');
//
// const getHouseById = async (id) =>
//     db('houses').where('id', id).first();
//
// const createHouse = async (request: HouseCreateInput) =>
//     await db('houses').insert({request});
//
//
// const updateHouse = async (request: HouseUpdateInput) =>
//     db('houses').where('id', request.id).update(request);
//
// const deleteHouse = async (id) => {
//     await db('houses').where('id', id).first().del();
//     return { message: 'House deleted successfully!' }
// };
//
// const findBiggestByNumberOfRooms = async (numberOfRooms) =>
//     db('houses').where('numberOfRooms', numberOfRooms);
//
// const findBiggestAndClosest = async (latitude, longitude) =>
//     db('hoses').where('latitude', latitude).where('longitude', longitude);

export default class HouseService {
    private db: Knex = (new MysqlRepository()).getClient();

    async getAllHouses() {
        return this.db.select('*').from('houses');
    }

    async getHouse(id) {
        return this.db.select('*').from('houses').where({id}).first();
    }

    async findBiggestByNumberOfRooms(numberOfRooms) {
        return this.db.select('*').from('houses')
            .where('number_of_rooms', numberOfRooms).limit(3);
    }

    async findBiggestAndClosest(latitude, longitude) {
        return this.db.select('*').from('houses')
            .where({ latitude, longitude }).limit(5);
    }

    async updateHouse(request: HouseUpdateInput) {
        return this.db('houses').where({id: request.id}).update(request, ['*']);
    }

    async createHouse(request: HouseCreateInput) {
        return this.db.insert(request).into('houses');
    }
}
