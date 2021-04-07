module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/national_parks',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    ssl: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' }
  }
}
