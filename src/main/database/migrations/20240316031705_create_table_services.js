/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('services', function (table) {
        table.increments('id')
        table.string('name', 80)
        table.string('phone', 12)
        table.string('device', 60)
        table.string('brand', 60)
        table.string('model', 60)
        table.string('serial_number', 60)
        table.text('description')
        table.float('price', 6, 2)

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('services')
};
