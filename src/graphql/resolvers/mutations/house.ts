
import houses from "../../dataset";

const house = {
    Mutation: {
        addHouse: (_: any, args: any) => {
            const newHouse = {
                id: houses.length + 1,
                name: args.name,
                longitude: args.longitude,
                latitude: args.latitude,
                numberOfRooms: args.numberOfRooms,
                builtDate: args.builtDate,
            };
            houses.push(newHouse);
            return newHouse;
        },
        updateHouse: (_: any, args: any) => {
            const updatedHouse = houses.find((house) => house.id === args.id);
            // Implement your update logic here
            return updatedHouse;
        },
    },
}

export default house;