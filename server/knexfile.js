module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'boost'
    }
  },

  production: {
    client: 'pg',
    // heroku default variable needed instead of testuser
    connection: process.env.testuser
  }
};
