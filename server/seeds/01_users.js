
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('boosts').del().then(() => {
    return knex('comments').del().then(() => {
      return knex('asks').del().then(() => {
        return knex('users').del()
          .then(function () {
            return knex.raw('ALTER SEQUENCE users_id_seq restart with 4;').then(() => {
              return Promise.all([
                // Inserts seed entries
                knex('users').insert({
                  id: 1,
                  insta_id: 'notme1',
                  username: 'coolface',
                  bio: 'I\'m awesome sauce person'
                }),
                knex('users').insert({
                  id: 2,
                  insta_id: 'rollingstone',
                  username: 'mrdad',
                  bio: 'geek person, old guy'
                }),
                knex('users').insert({
                  id: 3,
                  insta_id: 'rainbows',
                  username: 'daughter',
                  bio: 'oh boy, this is a pretty sweet bio you got there'
                })
              ]);
            });
          });
        });
      });
    });
};
