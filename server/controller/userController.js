const express = require('express');
const userController = express.Router();
const User = require("../model/userModel");
const jwt = require('jsonwebtoken');

userController.get("/:username", async (req, res) => {
    const username = req.params(id); 
    const user = await User.findOne({ username });

    res.status(200).json({user});
  });

  module.exports = userController;