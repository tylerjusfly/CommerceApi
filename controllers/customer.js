const db = require('../models/index')
const { constants } = require('./constants')

const customers = db.customers

exports.customerController = {
  create : (req, res)=>{
    const customer = req.body
    customers.create(customer, {
      include: db.users
    }).then(data =>{
      res.status(200).send(data)
    }).catch(err =>{
      constants.errorHandler(err,res)
    })
  },
  getAll : (req,res) =>{
    customers.findAll({
      include: db.users
    }).then(data => {
      if (data[0] == undefined){
        res.status(404).send({message: "Customers Does NOt Exist In Our DataBase Yet"})
      }
      res.status(200).send(data);

    }).catch(err => {
      res.status(404).send({
        message: "Could Not Fetch Any Record"
      })
    })
  },
  getById : (req,res)=>{
    customers.findOne({
      where : {
        id : req.params.id
      },
      include : db.users
    }).then(data=> {
      if (data == undefined){
        res.status(404).send({
          message : "Record Could Not Be Found"
        })
      }
      res.status(200).send(data)
    }).catch(err => {
      res.status(404).send({
        message : "An Error Which I Cant Really Say Happened"
      })
    })
  },
  update : (req,res)=>{
    const user = req.body
    customers.update(user, {
      where : {
        id : req.params.id
      }
    }).then(data => {
      if (data[0] !== 1){
        res.status(404).send({
          message : "An error occured during update"
        })
      }
      res.status(200).send({
        message : "Record Updated Successfully"
      })
    }).catch(err => {
      constants.errorHandler(err, res)
    })

  },
  delete : (req,res)=>{
    customers.destroy({
      where : {
        id : req.params.id
      }
    }).then(data =>{
      if (data !== 1){
        res.status(400).send({message : "What Happpend Cause I Have No Idea Too."})
      }
      res.status(200).send({messsage : "Record Deleted Successfully"})
    }).catch(err=> {
      res.status(400).send({message : "Error Bro!! Run for your life"})
    })

  }
}