import {HouseCreateInput, HouseUpdateInput, QueryFindBiggestAndClosestArgs} from "../types/types";
import {Knex} from "knex";
import MysqlRepository from "./MysqlRepository";
import NoHousesFoundException from "../exceptions/NoHousesFoundException";

export default class HouseService {
    private db: Knex = (new MysqlRepository()).getClient();

    async getAllHouses() {
        return this.db.select('*').from('houses');
    }

    async getHouse(id: number) {
        return this.db.select('*').from('houses').where({id: id}).first();
    }

    async findHousesByDistance({ latitude, longitude }: QueryFindBiggestAndClosestArgs, orderBy: any, limit: number) {
        const MAX_DISTANCE_IN_METERS = 1000;

        return this.db
            .select('*')
            .from('houses')
            .whereRaw(`
              ST_DISTANCE(
                POINT(longitude, latitude),
                POINT(?, ?)
            ) < ?`, [longitude, latitude, MAX_DISTANCE_IN_METERS])
            .orderBy(orderBy)
            .limit(limit);
    }

    async findBiggestAndNewest({ latitude, longitude }: QueryFindBiggestAndClosestArgs) {
        const orderBy = [
            { column: 'numberOfRooms', order: 'desc' },
            { column: 'builtDate', order: 'desc' },
        ];

        return await this.findHousesByDistance({ latitude, longitude }, orderBy, 3);
    }

    async findBiggestAndClosest({ latitude, longitude }: QueryFindBiggestAndClosestArgs) {
        const orderBy = [{ column: 'numberOfRooms', order: 'desc' }];

        return await this.findHousesByDistance({ latitude, longitude }, orderBy, 5);
    }

    async updateHouse(request: HouseUpdateInput) {
        return this.db('houses').where({id: request.id}).update(request, ['*']);
    }

    async createHouse(request: HouseCreateInput) {
        const insertedIds = await this.db('houses').insert(request);

        return this.db('houses').select('*').where('id', insertedIds[0]).first();
    }
}
