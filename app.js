const express = require("express");
const app = express();

//import the router created
const indexRouter = require("./routes/indexRouter");

// Set EJS as template engine
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Use the index router
app.use("/", indexRouter);

// Start the server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
