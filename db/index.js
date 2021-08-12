const { Pool, Client } = require('pg');

const connectionString = process.env.DATBASE_URL;

const pool = new Pool();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
