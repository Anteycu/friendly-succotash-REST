const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "PostGres0",
  host: "localhost",
  port: 5432,
  database: "rest_postgres",
});

module.exports = pool;
