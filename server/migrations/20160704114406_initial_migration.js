exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.string('insta_id').notNullable().unique().comment('Instagram username');
    table.increments();
    table.string('username').notNullable().unique().comment('Boost username');
    table.string('bio');
  });
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};
