//import express
const {Router} = require("express");

//import the controller that will the route control
const messageController = require("../controllers/messageController");
//creaters a userRouters variable
const messagesRouter = Router();


// GET / - index page
messagesRouter.get("/", messageController.messagesListGet);

// GET /new - new message form
messagesRouter.get("/new", messageController.messagesCreateGet);

// POST /new - handle form submission
//capturing what the user sent
messagesRouter.post("/new", messageController.messagesCreatePost);

module.exports = messagesRouter;
