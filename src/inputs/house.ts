export interface HouseUpdateInput {
    id: string;
    name?: string;
    builtDate?: string;
    numberOfRooms?: number;
    latitude?: number;
    longitude?: number;
}

export interface HouseCreateInput {
    name?: string;
    builtDate?: string;
    numberOfRooms?: number;
    latitude?: number;
    longitude?: number;
}
