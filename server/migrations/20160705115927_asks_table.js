
exports.up = function(knex, Promise) {
  return knex.schema.createTable('asks', function(table) {
    table.increments().comment('ID number of the ask itself');
    table.integer('asking_user').notNullable().references('users.id').comment('ID of user who created the ask');
    table.string('ask').comment('Content of the ask itself');
  });
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('asks')
  ])
};
