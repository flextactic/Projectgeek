const bcrypt = require("bcryptjs");
const Joi = require("joi");
const jwt = require('jsonwebtoken');
const _ = require("lodash");
const { User, validateLogin } = require("../models/user");
const express = require("express");
const route = express.Router();

route.post("/", async (req, res) => {
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password. ");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send("Invalid email or password. ");

  const token = jwt.sign(
    {
      _id: user._id,
    },
    process.env.JWT_PRIVATE_KEY
  );
  res.status(200).send({ token, user: _.pick(user, ["_id","name", "email"]) });
});

module.exports = route;