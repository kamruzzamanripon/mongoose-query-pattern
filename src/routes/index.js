const express = require('express');
const userRouterApi = require('./userRouterApi') 

const route = (app)=>{

    app.use('/api/v1', userRouterApi);

    app.use('*', (req, res)=> res.status(404).json({status:"fail", data:"Route does not exist"}));
}

module.exports = route;