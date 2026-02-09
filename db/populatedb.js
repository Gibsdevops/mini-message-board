#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `

CREATE TABLE IF NOT EXISTS messages ( 
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 message VARCHAR(255)
 );


INSERT INTO messages (message) 
VALUES ('am in');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://postgres:Aliho@16396@localhost:5432/usermessages",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
