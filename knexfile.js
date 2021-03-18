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

  staging: {
    client: 'postgresql',
    connection: 'postgres://localhost/national_parks',
    migrations: {
      tableName: 'parks'
    }
  },

  production: {
    client: 'postgresql',
    connection: 'postgres://localhost/national_parks',
    migrations: {
      tableName: 'parks'
    }
  }
}
