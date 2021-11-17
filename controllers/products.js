const db = require("../models/index");
const { constants } = require("./constants");

const products = db.products

exports.productController = {
  create : (req,res) => {
    const product = req.body

    products.create(product).then(data =>{
      res.status(200).send(data)
    }).catch(err => {
      constants.errorHandler(err, res)
    })

  },
  getAll : (req,res) => {
    products.findAll({
      include : db.customers
    }).then(data => {
      res.status(200).send(data)
    }).catch(err => {
      res.status(404).send({
        message : "an Error Just Occurred"
      })
    })
  },
  getBYId : (req, res) => {
    products.findOne({
      where : {
        id : req.params.id
      },
      include : db.customers
    }).then(data => {
      if(data == undefined){
        res.status(400).send({
          message : "Record could not be found"
        })
      }
      res.status(200).send(data)
    }).catch(err => {
      res.status(404).send("An Error Occurred")
    })
  },
  update : (req,res) => {
    const product = req.body
    products.update(product,{
      where : {
        id : req.params.id
      }
    }).then(data => {
      res.status(200).send({
        message : "record successfully updated"
      })
    }).catch(err => {
      constants.errorHandler(err,res)
      })
    },
    delete : (req,res)=>{
      prductss.destroy({
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