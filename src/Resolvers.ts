import {HouseCreateInput, HouseUpdateInput} from "./types/types";
const houseService = require('../services/houseService');

const Resolvers = {
    Query: {
        getAllHouses: () => houseService.getAllHouses(),
        getHouse: (id) => houseService.getHouse(id),
        findBiggestByNumberOfRooms: (numberOfRooms) => houseService.findBiggestByNumberOfRooms(numberOfRooms),
        findBiggestAndClosest: (latitude, longitude) => houseService.findBiggestAndClosest(latitude, longitude),
    },
    Mutation: {
        addHouse: (request: HouseCreateInput) => houseService.createHouse(request),
        updateHouse: (request: HouseUpdateInput) => houseService.updateHouse(request)
    },
};
export default Resolvers;