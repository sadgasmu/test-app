import HouseService from "../../../services/HouseService";
import {HouseCreateInput, HouseUpdateInput} from "../../../types/types";

export default {
    Mutation: {
        addHouse: async (_: any, {data}: {data: HouseCreateInput}) => {
            const houseService: HouseService = new HouseService();
            return await houseService.createHouse(data);
        },
        updateHouse: (_: any, data: HouseUpdateInput) => {
            const houseService: HouseService = new HouseService();
            return houseService.updateHouse(data);
        },
    },
};
