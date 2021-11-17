const jwt = require('jsonwebtoken')
const config = require('../config/auth')

verifyToken = (req, res, next) => {
  let token = req.headers[authorization];

  if(!token){
    res.status(403).send({
      message : "Forbidden"
    })
  }
  jwt.verify(token, config.secretKey, (err, decoded) => {
    if(err){
        res.status(403).send({
          message : "Un-Authorized Access"
        })
    }
    req.userId = decoded.id;
  }) 
}

const jwtauth = {
  verifyToken
}

module.exports = jwtauth