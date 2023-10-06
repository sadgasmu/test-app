import HouseService from "../../../services/HouseService";

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
        findBiggestHouses: async (_: any) => {
            const houseService: HouseService = new HouseService();
            return await houseService.findBiggestHouses();
        },
        findBiggestAndNewestByLocation: async (_: any, data: {longitude: number, latitude: number}) => {
            const houseService: HouseService = new HouseService();
            return await houseService.findBiggestAndNewestByLocation(data);
        },
    },
};