import HouseService from "../../../services/HouseService";
import { HouseCreateInput, HouseUpdateInput } from "../../../types/types";

const house = {
    Mutation: {
        addHouse: (_: any, data: HouseCreateInput) => {
            const houseService: HouseService = new HouseService();
            return houseService.createHouse(data);
        },
        updateHouse: (_: any, data: HouseUpdateInput) => {
            const houseService: HouseService = new HouseService();
            return houseService.updateHouse(data);
        },
    },
}

export default house;