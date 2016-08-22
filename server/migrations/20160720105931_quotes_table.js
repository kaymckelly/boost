
exports.up = function(knex, Promise) {
  return knex.schema.createTable('quotes', function(table) {
    table.increments();
    table.string('quote');
    table.string('author');
  });
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('quotes')
  ])
};
