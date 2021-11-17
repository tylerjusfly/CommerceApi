const db = require('../models/index.js')
const {constants} = require('./constants')

const users = db.users

exports.usersController = {
  // create : (req, res)=>{
  //   const user = req.body
  //   users.create(user).then(data => {
  //     res.status(200)
  //         .send(data)
  //   }).catch(err => {
  //     constants.errorHandler(err, res)
  //   })
  // },
  getAll : (req,res)=>{
    users.findAll().then(data =>{
      if (data[0] == undefined){
        res.status(404).send({
          message : "No users available"
        })
      }
      res.status(200).send(data)
    }).catch(err =>{
      res.status(400).send({
        message : err.message || "Could Not Fetch Record"
      })
    })

  },
  getbyid : (req,res)=>{
    users.findOne({
      where : {
        id : req.params.id
      }
    }).then(data => {
      if(data == undefined){
        res.status(404).send({
          message : "Record Not Found"
        })
      }
      res.status(200).send(data)

    }).catch(err => {
      res.status(400).send({
        message : err.message || "Could Not Find Record"
      })

    })

  },
  update : (req,res) => {
    const user = req.body
    users.update(user, {
      where : {
        id : req.params.id
      }
    }).then(data =>{
      if(data[0]!== 1){
        res.status(404).send({
          message : "Data was not Found"
        })
      }
      res.status(200).send({
        message : "Data Was Updated"
      })
    }).catch(err => {
      constants.errorHandler(err,res)
    })

  },
  delete : (req,res)=>{
    users.destroy({
      where : {
        id : req.params.id
      }
    }).then(data => {
      if (data !== 1){
        res.status(404).send({
          message : "record was not found"

        })
      }
      res.status(200).send({
        message : "record succesfuly deleted."
      })
    }).catch(err => {
      res.send({
        message : "record was deleted"
      })
    })

  }
}