const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();


router.get('/all-user', UserController.userAll)



module.exports = router;