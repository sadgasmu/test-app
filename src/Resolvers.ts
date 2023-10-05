// import {HouseCreateInput, HouseUpdateInput} from "./types/types";
// const houseService = require('../services/houseService');
//
// const Resolvers = {
//     Query: {
//         getAllHouses: () => houseService.getAllHouses(),
//         getHouse: (_: any,id) => houseService.getHouse(id),
//         findBiggestByNumberOfRooms: (_: any,numberOfRooms: number) => houseService.findBiggestByNumberOfRooms(numberOfRooms),
//         findBiggestAndClosest: (_: any, latitude: number, longitude: number) => houseService.findBiggestAndClosest(latitude, longitude),
//     },
//     Mutation: {
//         addHouse: (_: any, request: HouseCreateInput) => houseService.createHouse(request),
//         updateHouse: (_: any, request: HouseUpdateInput) => houseService.updateHouse(request)
//     },
// };
// export default Resolvers;