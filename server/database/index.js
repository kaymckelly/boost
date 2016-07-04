var knex = require('./db/knex');

knex('users').select().then(function(data) {
  console.log(data);
  process.exit(1);
});
