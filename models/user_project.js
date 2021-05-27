const mongoose = require("mongoose");
const Joi = require('joi');
const validator = require("validator");

const projectModel = new mongoose.Schema({
     name:{
         type:String,
         required: true,
         minlength :4,
         maxlength:50,
         trim:true,
     },
     Author: {
         user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'User',
            required: true,
         }
     },
    description:{
         type: String,
         required: true,
         trim:true,
     },
     tags:
     {
        type: Array,
        validate:{
            isAsync:true,
            validator: async function(v,callback)
            {
                 setTimeout(() =>{
                     const result = v && v.length >0;
                     callback(result);
                 },2000);
            },
            message : 'A Project Should have atleast one tag.'
        },
        required: true,
     },
     dateuploadedAt:
     {
         type: Date,
         default: Date.now(),
     },
     likes:
     {
         type: Number,
         default:0,
     },
     dislikes:
     {
         type:Number,
         default:0,
     },
     githubUrl:{
         type:String,
         required: true
     }
})

function validateProject(project) {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50),
        Author: Joi.string().required().min(3).max(50),
        tags: Joi.Array().required(),
        description: Joi.string().required().min(10).max(200),
        githubUrl: Joi.string().required(),
    });
  
    return schema.validate(project);
  }



function validateEditProject(projectData) {
    const schema = Joi.object({
      name: Joi.string().required().min(3).max(50),
      tags: Joi.Array().required(),
      Author: Joi.string().required().min(3).max(50),
      description: Joi.string().required().min(10).max(200),
      githubUrl: Joi.string().required(),
    });
  
    return schema.validate(projectData);
  }




const Project = new mongoose.model('Project',projectModel);


module.exports= Project;
exports.validateProject=validateProject;
exports.validateEditProject=validateEditProject;