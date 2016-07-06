
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table) {
    table.integer('ask_id').notNullable().references('asks.id').comment('Problem from which this comment originated from');
    table.integer('commenter_id').notNullable().references('users.id').comment('Person who made the comment');
    table.string('comment').comment('The contents of the comment');
  }).then(function() {
    return knex.schema.createTable('boosts', function(table) {
      table.integer('ask_id').notNullable().references('asks.id').comment('ID of ask with which this boost is associated');
      table.integer('booster_id').notNullable().references('users.id').comment('ID of user who added this boost');
    })
  });
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('comments'),
    knex.schema.dropTable('boosts')
  ])
};
