const express= require('express')
const mongoose =require('mongoose')
const route = express.Router();
const bcrypt = require('bcryptjs')
const _ = require('lodash')
const auth =require('../middlewares/auth')
const {User, validateUser, validateLogin, validateEditUser,pickUserData,validatePassReset} = require('../models/user')

route.get('/me', async(req,res)=>{
    const user=await User.find(req.user.id)
    .populate('Project')
    .select([
        "name",
        "email",
        "sex",
        "githubUrl",
        "projects",
        "porjectInRequirement"
    ]);
    res.status(200).send(user);
});

route.get('/profile/:id', async(req, res)=>{
    const user = await User.findById(req.params.id)
    .populate('Project')
    .select([
        "name",
        "email",
        "sex",
        "githubUrl",
        "projects",
        "porjectInRequirement"
    ]);
    if(!user)
    {
       res.status(400).send("User with given id doesn't exist");
    }
    res.status(200).send(user);
});

route.post('/add', async(req,res)=>{
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User(pickUserData(req.body));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  res.status(200).send(_.pick(user, ["_id", "name", "email"]));
});

route.put('/edit', auth, async(req,res)=>{

    const { error } = validateEditUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    console.log(req.user._id);
    const result = await User.updateOne(
        { _id: req.user._id },
        {
          $set: {
            name: req.body.name,
            about: req.body.about,
            githubUrl: req.body.githubUrl,
            sex: req.body.sex,
          },
        }
      );
      if (result.n)
        res.status(200).send("Your profile has been successfully updated.");
      else res.status(500).send("Error! please, try again later...");
});

route.put("/resetPassword",auth, async (req, res) => {
    const { error } = validatePassReset(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    const user = await User.findById(req.user._id);
    const validPassword = await bcrypt.compare(
      req.body.old_password,
      user.password
    );

    if (!validPassword) return res.status(400).send("Old password is incorrect. Try again");
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.new_password, salt);
    await user.save();
    res.status(200).send(_.pick(user, ["_id", "name", "email"]));
  });

module.exports=route;