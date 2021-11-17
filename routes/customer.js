const express = require("express")
const router = express.Router()
const {customerController} = require('../controllers/customer')
const customers = require('../models/customer')

// Add to list of customers
router.post('/',customerController.create)

// Get all users
router.get('/', customerController.getAll)

// get customers by id
router.get('/:id', customerController.getById)

router.put('/:id',customerController.update)

router.delete('/:id', customerController.delete)

module.exports = router