const mongoose = require('mongoose');
const Joi = require('joi')
Joi.objectId = require("joi-objectid")(Joi);
const projectInRequirement = new mongoose.Schema({
    authorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    projectID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
        required:true,
    },
   description:{
        type: String,
        required: true,
        trim:true,
    },
})
function validateData(data)
{
    const schema = Joi.object({
        projectId:Joi.objectId().required(),
        description:Joi.string().required(),
    });
    return schema.validate(data);
}
function validateEdit(data)
{
    const schema = Joi.object({
        id: Joi.objectId().required(),
        description:Joi.string().required(),
    });
    return schema.validate(data);
}

const ProjectInRequirement =  mongoose.model('ProjectInRequirement',projectInRequirement);

exports.ProjectInRequirement = ProjectInRequirement;
exports.validateData = validateData;
exports.validateEdit= validateEdit;