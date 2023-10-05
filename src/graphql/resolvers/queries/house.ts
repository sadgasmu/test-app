import HouseService from "../../../services/HouseService";

const house = {
    Query: {
        getAllHouses: () => {
            const houseService: HouseService = new HouseService();
            return houseService.getAllHouses();
        },
        getHouse: (id) => {
            const houseService: HouseService = new HouseService();
            return houseService.getHouse(id);
        },
        findBiggestByNumberOfRooms: (numberOfRooms) => {
            const houseService: HouseService = new HouseService();
            return houseService.findBiggestByNumberOfRooms(numberOfRooms);
        },
        findBiggestAndClosest: (latitude, longitude) => {
            const houseService: HouseService = new HouseService();
            return houseService.findBiggestAndClosest(latitude, longitude)
        },
    },
}

export default house;