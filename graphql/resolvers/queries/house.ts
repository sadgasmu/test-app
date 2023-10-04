import houses from "../../dataset";

const house = {
    Query: {
        getAllHouses: () => houses,
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