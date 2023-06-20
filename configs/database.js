const Pool = require("pg").Pool;

const pool = new Pool(
    {
        user:"postgres",
        password:"123",
        host:"localhost",
        localhost:5432,
        database: "web_db"
    }
);
module.exports =pool;

