const express = require('express')
const user = require('../routes/users')
const login = require('../routes/login');


module.exports = function(app)
{
   app.use(express.json());
   app.use(express.static("public"));
   app.use('/api/users',user);
   app.use('/api/login',login);
}