const express = require("express");
const router = new express.Router();
const Project= require("../models/user_project");
const bcrypt = require('bcryptjs')
const _ = require('lodash')
const auth =require('../middlewares/auth')
const mongoose =require('mongoose')
const validateProject= require("../models/user_project");
const validateEditProject= require("../models/user_project");
const { Router } = require("express");

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

// TODO: GET MY PROJECT

router.get("/my_project",auth,async(req,res)=>{
    try{
        const projectData=await Project.find(req.user._id);
        res.status(200).send(projectData);
    }catch{
        res.status(400).send("Something went wrong try again later...");
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

router.put("/update_project",auth, async(req,res)=>{

    const { error } = validateEditProject(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try{

        const _id= req.user._id;
        if(!_id) return res.status(400).send("User not found...");
        
        if(req.params.id!==_id)
        {
            res.status(420).send("Sorry you not have the access to update this project..");
        }
       
        const updateProject= await Project.findByIdAndUpdate(_id,req.body,{new :true});
        console.log(updateProject);
        res.status(200).send(updateProject);
    }catch(e)
    {
        res.status(401).send("Error!... Please try again later..");
    }
   
})

// TODO: Delete particular project of a user

router.delete("/delete_project",auth,async(req,res)=>{
    try{
        if(!req.user._id){
            return res.status(400).send("Something went wrong...");
        }
        
        if(req.params.id!==_id)
        {
            res.status(420).send("Sorry you not have the access to delete this project..");
        }


        const deleteProject= await Project.findByIdAndDelete(req.user._id);
        res.status(200).send(deleteProject);
    }
    catch(e){
        res.status(500).send("OPPS... Please try again later");
    }
})

module.exports = router;