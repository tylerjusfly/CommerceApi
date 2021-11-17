const express = require('express')
const router = express.Router()
const {authController} = require('../controllers/auth')



// SignUp
router.post('/signup', authController.signUp)

// signIn
router.post('/signin', authController.signIn)

module.exports = router