
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('boosts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('boosts').insert({
          ask_id: 1,
          booster_id: 3
        }),
        knex('boosts').insert({
          ask_id: 2,
          booster_id: 1
        }),
        knex('boosts').insert({
          ask_id: 3,
          booster_id: 2
        })
      ]);
    });
};
