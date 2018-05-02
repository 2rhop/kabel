
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').unsigned().primary();
        table.string('username').notNull();
        table.string('password').notNull();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
        table.timestamp('deletedAt').nullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users')
};
