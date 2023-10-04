import { Knex } from 'knex';
import { House } from '../types/types'

declare module 'knex/types/tables' {
    interface Tables {
        houses: House
        houses_composite: Knex.CompositeTableType<House,
            Pick<House, 'name'> & Partial<Pick<House, 'numberOfRooms'|'builtDate'|'latitude'|'longitude'>>,
            Partial<Omit<House, 'id'>>
        >,
    }
}

