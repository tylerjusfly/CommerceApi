const db = require("../models/index");
const {constants} = require('./constants')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/auth')
const users = db.users

exports.authController = {
  signUp : (req, res) => {
    const user = req.body
    user.password = bcrypt.hashSync(user.password, 10)
    users.create(user).then(data => {
      res.status(200).send(data)
    }).catch(err => {
      constants.errorHandler(err, res)
    })

  },
  signIn : (req, res) => {

    users.findOne({
      where : {
        username : req.body.username
      }
    }).then(user => {

      if(!user){
        return res.status(401).send({
          message : "Invalid username or password "
        })
      }

      let isValidPassword = bcrypt.compareSync(req.body.password, user.password)
      if(!isValidPassword){
        return res.status(401).send({
          message : "Invalid username or password"
        })
      }
      let payLoad = {
        id : user.id,
        username : user.username
      }

      let token = jwt.sign(payLoad, config.secretKey,  {
        expiresIn : 3600
      })

      res.status(200).send({
        acessToken : token
      })
    }).catch(err => {
      res.status(404).send({
        message : err.message || "Could not find record."
      })
    })

  }

}
