module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/testuser'
    }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'pg',
    connection: process.env.testuser,
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
  }

};
