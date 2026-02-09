const db = require("../db/queries");

const { body, validationResult, matchedData} = require("express-validator");

const validateMessage = [
  //the body function allows us tp specify which fields
  //should be validated and sanitized as well how to handle it
  body("message").trim()
    
];



exports.messagesListGet = async (req, res, next) => {
  try{
    const messages = await db.getAllmessages();
    res.render("index", {
    title: "all messages",
    messages,
  });
  }
  catch(err){
    next(err);

  }
  
};

exports.messagesCreateGet = (req, res) => {
  res.render("form", {
    title: "Create message",
  });
};

//post create user
// We can pass an entire array of middleware validations to our controller.
exports.messagesCreatePost = [
  validateMessage, //call the vaidation function first
  async (req, res) => {

    const errors = validationResult(req);


    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "create user",
        errors: errors.array(),
    });
  }

  //we retrieve all validated data via the matchedData function to ensure al the data
  //we get will include sanitization
  try {

    const { message } = matchedData(req);
    await db.insertMessage(message);
    res.redirect("/");
  } catch (err) {
    next(err);
    
  } 
  

  }
];
