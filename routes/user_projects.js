const express = require("express");
const router =  express.Router();
const auth =require('../middlewares/auth')
const mongoose =require('mongoose')
const {Project,validateProject,validateEditProject} = require("../models/user_project");
const {User} = require("../models/user");

// TODO: "CREATE PROJECT API";
router.post("/create_project",auth,async(req, res)=>{
    
    try{
        const { error } = validateProject(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        const project= new Project({
            name: req.body.name,
            Author: req.body.Author,
            description: req.body.description,
            tags: req.body.tags,
            githubUrl: req.body.githubUrl
        });
        const createProject =await project.save();
        const user = await User.findById(req.user._id);
        if(!user) return res.status(404).send('User not Found.');
        user.projects.push({id:createProject._id});
        user.save();
        console.log(createProject);
        res.status(201).send(createProject);
    }
    catch(e){
        console.log(e);
        res.status(400).send(e);
    }
})

// TODO: GET MY PROJECT
router.get("/my_project",auth,async(req,res)=>{
    try{
        const projectData=await Project.find(req.user._id).populate("Author");
        res.status(200).send(projectData);
    }catch{
        res.status(400).send("Something went wrong try again later...");
    }
})

// TODO: GET PROJECTS API
router.get("/get_projects",async(req,res)=>{
    try{
        const projectData = await Project.find().populate("Author","-password");
        res.status(200).send(projectData);
    }catch(e){
        res.status(400).send(e);
    }
})

//TODO GET SINGLE PROJECT API
router.get("/get_project/:id", async(req,res)=>{
    try{
        const _id= req.params.id; 
        const projectData= await Project.findById(_id).populate("Author","-password");

        if(!projectData){
            return res.status(404).send("No project is their for this user.");
        }else
        {
            res.send(projectData);
        }
    }catch(e){
       res.status(400).send(e); 
    }
})

// TODO UPDATE YOUR PROJECT DETAIL
router.put("/update_project/:id",auth, async(req,res)=>{

     try{
        const { error } = validateEditProject(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        const project = await Project.findById(req.params.id);
        console.log(project);
        if(!project) return res.status(400).send('Project does not exist with the given id');
        if(project.Author!=req.user._id) return res.status(404).send('You dont have proper rights to update this project');

        const result = await Project.updateOne(
            { _id: req.params.id},
            {
              $set: {
                name: req.body.name,
                description: req.body.description,
                tags: req.body.tags,
                githubUrl: req.body.githubUrl
              },
            }
          );
          if (result.n)
            res.status(200).send("Your project has been successfully updated.");
          else res.status(500).send("Error! please, try again later...");

    }catch(e)
    {
        console.log(e);
        res.status(401).send("Error!... Please try again later..");
    }
   
})

// TODO: Delete particular project of a user
router.delete("/delete_project/:id",auth,async(req,res)=>{
    try{
        
        const project = await Project.findById(req.params.id);
        if(!project) return res.status(400).send('Project does not exist with the given id');
        if(project.Author!=req.user._id) return res.status(404).send('You dont have proper rights to delete this project');
       
        const user = await User.updateOne(
            { _id: req.user._id },
            {
              $pull: {
                projects: { id: project._id, contentType: mongoose.Schema.Types.ObjectId },
              },
            }
          );
         
        const deleteProject= await Project.findByIdAndDelete(req.params.id);
        res.status(200).send(deleteProject);
    }
    catch(e){
        res.status(500).send("OPPS... Please try again later");
    }
})

module.exports = router;