
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('asks').del()
    .then(function() {
      return knex.raw('ALTER SEQUENCE asks_id_seq restart with 4;');
    }).then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('asks').insert({
          id: 1,
          asking_user: 3,
          ask: 'Pls to be halping, I am lonely and want a girlfriend but I live in the midwest so no gays and what do I do to find somebody cute and nice and funny, maybe I should just move to California or something because that\'s where all the gays are right'
        }),
        knex('asks').insert({
          id: 2,
          asking_user: 1,
          ask: 'I don\'t wanna bite my nails anymore, I wanna be a cool kid instead so halp how do I stop nomming the ends of my poor fingers?'
        }),
        knex('asks').insert({
          id: 3,
          asking_user: 3,
          ask: 'Tell me something to get me through the night. I have to hang out with my friend and she is actually not really my friend. I wanna remember that I too am a good human'
        })
      ]);
    });
};
