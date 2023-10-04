import houses from "../../dataset";
import HouseService from "../../../services/HouseService";

const house = {
    Query: {
        getAllHouses: () => {
            // return [{
            //     id: 1,
            //     name: 'test1',
            //     builtDate: '2200-20-20',
            //     numberOfRooms: 5,
            //     latitude: 23.23,
            //     longitude: 13.13
            // }];
            const houseService: HouseService = new HouseService();
            return houseService.getAllHouses();
        },
        getHouse: (_: any, args: any) => {
            return houses.find((house) => house.id === args.id);
        },
        findBiggestByNumberOfRooms: (_: any, args: any) => {
            return houses.find((house) => house.longitude === args.longitude);
        },
        findBiggestAndClosest: (_: any, args: any) => {
            return houses.find((house) => house.longitude === args.longitude);
        },
    },
}

export default house;