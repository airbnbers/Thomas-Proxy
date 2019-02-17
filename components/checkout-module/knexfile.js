const config = './config.js';


module.exports = {
  test: {
    client: 'postgresql',
    connection: {
      user:     'postgres',
      database: 'rooms'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },
  development: {
    client: 'postgresql',
    connection: {
      user:     'postgres',
      database: 'rooms'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  }
}