const express = require('express');
const userRouterApi = require('./userRouterApi'); 
const productRouterApi = require('./productRouterApi'); 
const invoiceRouterApi = require('./invoiceRouterApi'); 

const route = (app)=>{

    app.use('/api/v1', userRouterApi);
    app.use('/api/v1', productRouterApi);
    app.use('/api/v1', invoiceRouterApi);

    app.use('*', (req, res)=> res.status(404).json({status:"fail", data:"Route does not exist"}));
}

module.exports = route;