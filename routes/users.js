var express = require('express');
var router = express.Router();
const {usersController} = require('../controllers/users.js');
const users = require('../models/users.js');


// Create new record
// router.post('/', usersController.create)

/* GET users listing. */
router.get('/', usersController.getAll)

// Get by id
router.get('/:id', usersController.getbyid)

router.put('/:id', usersController.update)

router.delete('/:id', usersController.delete)

module.exports = router;
