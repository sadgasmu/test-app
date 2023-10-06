import HouseService from "../../../services/HouseService";
import {QueryFindBiggestAndClosestArgs} from "../../../types/types";

export default {
    Query: {
        getAllHouses: async () => {
            const houseService: HouseService = new HouseService();
            return await houseService.getAllHouses();
        },
        getHouse: async (_: any, {id}: { id: number }) => {
            const houseService: HouseService = new HouseService();
            return await houseService.getHouse(id);
        },
        findBiggestAndNewest: async (_: any, data: QueryFindBiggestAndClosestArgs) => {
            const houseService: HouseService = new HouseService();
            return await houseService.findBiggestAndNewest(data);
        },
        findBiggestAndClosest: async (_: any, data: QueryFindBiggestAndClosestArgs) => {
            const houseService: HouseService = new HouseService();
            return await houseService.findBiggestAndClosest(data);
        },
    },
};