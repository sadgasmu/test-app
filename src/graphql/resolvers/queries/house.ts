import HouseService from "../../../services/HouseService";

const house = {
    Query: {
        getAllHouses: async () => {
            const houseService: HouseService = new HouseService();
            return await houseService.getAllHouses();
        },
        getHouse: async (_: any, {id}: { id: number }) => {
            const houseService: HouseService = new HouseService();
            return await houseService.getHouse(id);
        },
        findBiggestByNumberOfRooms: async (_: any, {latitude, longitude}: { numberOfRooms: number }) => {
            const houseService: HouseService = new HouseService();
                return await houseService.findBiggestByNumberOfRooms(latitude, longitude);
        },
        findBiggestAndClosest: async (_: any, {latitude, longitude}: { latitude: number, longitude: number }) => {
            const houseService: HouseService = new HouseService();
            return await houseService.findBiggestAndClosest(latitude, longitude)
        },
    },
}

export default house;