const express = require('express');
const { getAllUser } = require('../controllers/userControllers');



// init route
const router = express.Router();

//create route
router.get('/', getAllUser);


//module exports
module.exports = router;