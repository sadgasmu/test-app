import { Knex } from "knex";


export async function up(knex: Knex): Promise<Knex.SchemaBuilder> {
    return knex.schema.createTable('houses', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('numberOfRooms').notNullable();
        table.float('latitude').notNullable();
        table.float('longitude').notNullable();
        table.date('builtDate');
        table.index(['latitude', 'longitude']);
    });
}


export async function down(knex: Knex): Promise<Knex.SchemaBuilder> {
    return knex.schema.dropTable('houses');
}

