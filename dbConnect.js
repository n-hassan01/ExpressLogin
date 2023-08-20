/* eslint-disable prettier/prettier */
const { Pool } = require('pg');

const dbName = process.env.POOL_DATABASE;
const dbPassword = process.env.POOL_PASSWORD;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: dbName,
  password: dbPassword,
  port: 5432,
});

module.exports = pool;
