const express = require("express");
const router = express.Router();

// Sample messages array
const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() }
];

// GET / - index page
router.get("/", (req, res) => {
    //while rendering u make the messages available to the local object
  res.render("index", { title: "Mini Messageboard", messages: messages  });
});

// GET /new - new message form
router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// POST /new - handle form submission
//capturing what the user sent
router.post("/new", (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/"); // redirect back to index page
});

// GET /messages/:id - show message details
router.get("/messages/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const message = messages[id];
  if (!message) return res.status(404).send("Message not found");

  res.send(`
    <h1>Message from ${message.user}</h1>
    <p>${message.text}</p>
    <p>Added: ${message.added.toLocaleString()}</p>
    <a href="/">Back to Messages</a>
  `);
});


module.exports = router;
