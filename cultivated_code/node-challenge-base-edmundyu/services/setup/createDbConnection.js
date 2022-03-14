const { Pool } = require("pg");
const pool = new Pool();
// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

const createDbConnection = async () => {
  return await pool.connect();
};

module.exports = { pool, createDbConnection };