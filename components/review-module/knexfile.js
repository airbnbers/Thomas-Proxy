module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: 'reviews',
      user:     'postgres',
      password: '',
    },
    migrations: {
      directory: __dirname + "/database-pg/migrations"
    },
    seeds: {
      directory: __dirname + "/database-pg/seeds"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: 'reviews',
      user:     'postgres',
      password: '',
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: 'reviews',
      user:     'postgres',
      password: '',
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
