// db/queries.js

//we use the query methode when querying with pg

const pool = require("./pool");

//function for retrieving messages
async function getAllmessages(){
    const { rows } = await pool.query(
        "SELECT * FROM messages"
    );
    return rows;
}

//function for inserting messages in the db
async function insertMessage(message) {
  await pool.query("INSERT INTO messages (message) VALUES ($1)", 
    [message]);
}

module.exports = {
    getAllmessages,
    insertMessage,
}