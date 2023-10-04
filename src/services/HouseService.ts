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
        console.log('db: ', this.db);
        return this.db.select('*').from('houses');
    }
}
