
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({
          ask_id: 2,
          commenter_id: 2,
          comment: 'stuff stuff and more stuff'
        }),
        knex('comments').insert({
          ask_id: 1,
          commenter_id: 2,
          comment: 'No, you\'re just a tool, your friends are not wrong'
        }),
        knex('comments').insert({
          ask_id: 1,
          commenter_id: 1,
          comment: 'You go girl'
        }),
        knex('comments').insert({
          ask_id: 1,
          commenter_id: 3,
          comment: 'heyyyy ma look at me I wrote something on the intertubewebs'
        })
      ]);
    });
};
