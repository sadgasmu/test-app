import HouseService from "../../../services/HouseService";
import { HouseCreateInput, HouseUpdateInput } from "../../../types/types";

const house = {
    Mutation: {
        addHouse: (request: HouseCreateInput) => {
            const houseService = new HouseService();
            return houseService.createHouse(request);
        },
        updateHouse: (request: HouseUpdateInput) => {
            const houseService = new HouseService();
            return houseService.updateHouse(request);
        },
    },
}

export default house;