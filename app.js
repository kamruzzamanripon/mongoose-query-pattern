const express = require('express');
const route = require('./src/routes/index');
const dbConnection = require('./src/utils/dbConnection');
const bodyParse = require('body-parser');

const app = new express();

//use app
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));


//mongoose DB connnection
dbConnection();
//Route connect
route(app);



module.exports = app;