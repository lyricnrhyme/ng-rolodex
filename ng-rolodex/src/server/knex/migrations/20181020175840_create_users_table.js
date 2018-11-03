
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.increments('user_id').notNullable();
        table.string('username').notNullable();
        table.unique('username');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('name').nullable();
        table.string('email').nullable();
        table.string('address').nullable();
    })
};

exports.down = function(knex, Promise) {
      return knex.schema.dropTable('users');
};
