const express = require("express");
const mongoose = require("mongoose");
const router = express();
const User = mongoose.model("Users");

router
  .route("/register")
  .get((req, res) => {
    res.send("register page");
  })
  .post((req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    newUser.save(err => {
      if (err.name == "ValidationError") console.log(err);
    });
  });
router
  .route("/login")
  .get((req, res) => {
    res.send("Login page");
  })
  .post((req, res) => {
    const newUser = new User({
      username: "sagar",
      email: "sagar@yahoo.in",
      password: "sagar"
    });
    newUser.save(err => {
      if (err.name == "ValidationError") console.log(err);
    });
  });

module.exports = router;
