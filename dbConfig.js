
require("./.env");
const Pool = require("pg").Pool;

// const isProduction = process.env.NODE_ENV === "production";

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

// const pool = new Pool({
//     connectionString: isProduction ? process.env.DATABASEE_URL : connectionString
// });

const pool = new Pool(
    {
        user:"postgres",
        password:"123",
        host:"localhost", 
        localhost:5432,
        database: "web_db"
    }
);

module.exports = pool;
