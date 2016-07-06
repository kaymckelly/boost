var knex = require('../knex');

knex('users').select().then(function(data) {
  console.log(data);
});
