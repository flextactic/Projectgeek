const express = require('express')
const user = require('../routes/users')
const login = require('../routes/login');
const project = require('../routes/user_projects');


module.exports = function(app)
{
   app.use(express.json());
   app.use(express.static("public"));
   app.use('/api/users',user);
   app.use('/api/login',login);
   app.use(project);
}