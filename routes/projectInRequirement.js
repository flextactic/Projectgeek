const express = require('express');
const route = express.Router();
const {ProjectInRequirement, validateData,validateEdit} = require('../models/requirementInProject')
const {User} = require('../models/user')
const auth = require('../middlewares/auth')
const mongoose = require('mongoose')

route.post('/add',auth,async(req,res)=>{
    const { error } = validateData(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const project = await ProjectInRequirement.findOne({projectID: req.body.projectId});
    console.log(project);
    if(project) return res.status(400).send('This project is already in the requirement section');
    const projectInRequirement = new ProjectInRequirement({authorID: req.user._id, projectID: req.body.projectId, description:req.body.description});
    const user = await User.findById(req.user._id);
    console.log(projectInRequirement);
    if(!user) return res.status(404).send('User not Found.');
    user.projectInRequirement.push({id:req.body.projectId});
    user.save();
    projectInRequirement.save();
    res.status(200).send('Project Successfully added in requirement seciton');
});

route.get('/', async(req,res)=>{
    const projectInRequirement= await ProjectInRequirement.find().populate('authorID');
    if(!projectInRequirement)  return res.status(400).send('NO project exist in this section.');
    res.status(200).send(projectInRequirement);
});

route.put('/update',auth, async(req,res)=>{
    const { error } = validateEdit(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const project = await ProjectInRequirement.findById(req.body.id);
    if(!project) return res.status(400).send('Project doesnot exist with the given id');
    if(project.authorID!=req.user._id) return res.status(404).send('You dont have proper rights to update this project');
    project.description=req.body.description;
    project.save();
    res.status(200).send("Project updated successfully");
})

route.delete('/delete/:id',auth, async(req,res)=>{
    //TODO: Refactor this route using transactions 
    const project = await ProjectInRequirement.findById(req.params.id);
    if(!project) return res.status(200).send('Project does not exist.');
    if(project.authorID!=req.user._id) return res.status(404).send('You dont have proper rights to delete this project');
     const user = await User.updateOne(
        { _id: req.user._id },
        {
          $pull: {
            projectInRequirement: { id: project.projectID, contentType: mongoose.Schema.Types.ObjectId },
          },
        }
      );
    const del= await ProjectInRequirement.findByIdAndDelete(req.params.id);
    res.status(200).send(user);
});

module.exports = route;

