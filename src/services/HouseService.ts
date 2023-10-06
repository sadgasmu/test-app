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

    async findBiggestHouses() {
        return this.db
            .select('*')
            .from('houses')
            .orderBy('numberOfRooms', 'desc')
            .limit(5);
    }

    async findBiggestAndNewestByLocation({ latitude, longitude }: { latitude: number, longitude: number }) {
        const biggestHouses = await this.findBiggestHouses();

        return this.db
            .select('*')
            .from('houses')
            .whereIn('id', [...biggestHouses].map((house) => house.id))
            .whereRaw(`
              ST_DISTANCE(
                POINT(longitude, latitude),
                POINT(?, ?)
            )`, [longitude, latitude])
            .orderBy('numberOfRooms', 'desc')
            .orderBy('builtDate', 'desc')
            .limit(3);
    }

    async updateHouse(request: HouseUpdateInput) {
        return this.db('houses').where({id: request.id}).update(request, ['*']);
    }

    async createHouse(request: HouseCreateInput) {
        const insertedIds = await this.db('houses').insert(request);

        return this.db('houses').select('*').where('id', insertedIds[0]).first();
    }
}
