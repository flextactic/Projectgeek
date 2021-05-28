const express = require("express");
const router =  express.Router();
const auth =require('../middlewares/auth')
const mongoose =require('mongoose')
const {Project,validateProject,validateEditProject} = require("../models/user_project");

// TODO: "CREATE PROJECT API";
router.post("/create_project", async(req, res)=>{
       
        const { error } = validateProject(req.body);
        if (error) return res.status(400).send(error.details[0].message);

    try{
        const project= new Project(req.body);
        const createProject = await project.save();
        res.status(201).send(createProject);
    }
    catch(e){
        res.status(400).send(e);
    }
})

// TODO: GET PROJECTS API

router.get("/get_projects",async(req,res)=>{
    try{
        const projectData = await Project.find().populate('User');
        res.status(200).send(projectData);
    }catch(e){
        res.status(400).send(e);
    }
})

//TODO GET SINGLE PROJECT API

router.get("/get_project/:id", async(req,res)=>{
    try{
        const _id= req.params.id; 
        const projectData= await Project.findById(_id).populate("User");

        if(!projectData)
        {
            return res.status(404).send();
        }
        else
        {
            res.send(projectData);
        }
    }catch(e){
       res.status(400).send(e); 
    }
})

// TODO Update the project detail by it id

router.put("/update_project/:id", async(req,res)=>{

    const { error } = validateEditProject(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try{
        const _id= req.params.id;
        if(!_id) return res.status(400).send();

        const updateProject= await Project.findByIdAndUpdate(_id,req.body,{new :true});
        res.status(200).send(updateProject);
    }catch(e)
    {
        res.status(401).send("Error!... Please try again later..");
    }
   
})

// TODO: Delete particular project of a user

router.delete("/delete_project/:id",async(req,res)=>{
    try{
        const deleteProject= await Project.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteProject);
    }
    catch(e){
        res.status(500).send("Opps... Please try again later");
    }
})

module.exports = router;