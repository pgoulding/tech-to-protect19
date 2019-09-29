module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/techtoprotect',
    useNullAsDefault: true,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/techtoprotect',
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds/test'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  }
};