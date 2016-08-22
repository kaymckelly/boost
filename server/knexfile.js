module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'boost'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
