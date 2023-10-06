import { Knex } from "knex";

const startDate: Date = new Date('2001-01-01');
const endDate: Date = new Date('2022-12-31');

function generateRandomDate(startDate: Date, endDate: Date) {
    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
    const randomTime = startTime + Math.random() * (endTime - startTime);
    return new Date(randomTime);
}

function generateRandomHouse() {
    const name = `House ${Math.floor(Math.random() * 100000)}`;
    const numberOfRooms = Math.floor(Math.random() * 10) + 1;
    const builtDate = generateRandomDate(startDate, endDate);
    const latitude = Math.random() * 180 - 90;
    const longitude = Math.random() * 360 - 180;

    return {
        name,
        numberOfRooms: numberOfRooms,
        builtDate: builtDate,
        latitude,
        longitude,
    };
}


export async function seed(knex: Knex): Promise<void> {
    await knex("houses").del();

    const recordsToSeed = 100000;
    const batchInsertSize = 1000;

    for (let i = 0; i < recordsToSeed; i += batchInsertSize) {
        const batch = [];
        for (let j = i; j < i + batchInsertSize && j < recordsToSeed; j++) {
            batch.push(generateRandomHouse());
        }
        await knex('houses').insert(batch);
    }
};
