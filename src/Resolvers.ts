import houses from "../graphql/dataset";
import {hostname} from "os";
const Resolvers = {
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
    Mutation: {
        addHouse: (_: any, args: any) => {
            const newHouse = {
                id: houses.length + 1,
                name: args.name,
                longitude: args.longitude,
                latitude: args.latitude,
                numberOfRooms: args.numberOfRooms,
                builtDate: args.builtDate
            };
            houses.push(newHouse);
            return newHouse; //return the new object's result
        },
        updateHouse: (_: any, args: any) => {
            const updatedHouse = houses.find(house => house.id === args.id);
            Object.keys(args)
        }
    },
};
export default Resolvers;