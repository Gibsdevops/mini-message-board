const { Pool } = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: "postgres",
    database: "usermessages",
    password: "Aliho@16396",
    port: 5432 
});