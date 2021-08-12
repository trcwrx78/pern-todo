// PostgreSQL Heroku setup
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = {
  query: (text, params) => client.query(text, params),
};

// Development Local setup
// const { Pool } = require('pg');

// const pool = new Pool();

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };
