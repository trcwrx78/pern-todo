const { Pool } = require('pg');

const connectionString = process.env.DATBASE_URL;

const pool = new Pool({ connectionString });

module.exports = {
  query: (text, params) => pool.query(text, params),
};
