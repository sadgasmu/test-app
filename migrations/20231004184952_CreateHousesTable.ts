import { Knex } from "knex";


export async function up(knex: Knex): Promise<Knex.SchemaBuilder> {
    return knex.schema.createTable('houses', function(table) {
        table.increments('id').primary();
        table.string('house_name').notNullable();
        table.integer('number_of_rooms').notNullable();
        table.float('latitude').notNullable();
        table.float('longitude').notNullable();
        table.date('built_date');
    });
}


export async function down(knex: Knex): Promise<Knex.SchemaBuilder> {
    return knex.schema.dropTable('houses');
}

