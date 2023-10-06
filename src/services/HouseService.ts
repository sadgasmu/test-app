import { HouseCreateInput, HouseUpdateInput } from "../types/types";
import HouseRepository from "../repositories/HouseRepository";
import NoHousesFoundException from "../exceptions/NoHousesFoundException";
import HouseNotFoundException from "../exceptions/HouseNotFoundException";

export default class HouseService {
    private houseRepository: HouseRepository = new HouseRepository();

    async getAllHouses() {
        return this.houseRepository.getAllHouses();
    }

    async getHouse(id: number) {
        return this.houseRepository.getHouse(id);
    }

    async findBiggestHouses() {
        return this.houseRepository.findBiggestHouses();
    }

    async findBiggestAndNewestByLocation({ latitude, longitude }: { latitude: number, longitude: number }) {
        return this.houseRepository.findBiggestAndNewestByLocation(latitude, longitude);
    }

    async updateHouse(request: HouseUpdateInput) {
        return this.houseRepository.updateHouse(request);
    }

    async createHouse(request: HouseCreateInput) {
        return this.houseRepository.createHouse(request);
    }
}
