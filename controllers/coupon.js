const db = require("../models/index")
const {constants} = require("./constants")

const coupons = db.coupon

exports.couponcreator = {
  create : (req, res) => {
    const coupon = req.body
    coupons.create(coupon).then(data => {
      res.status(200).send(data)
    }).catch(err => {
      constants.errorHandler(err, res)
    })
  },
  getAll : (req, res) => {
    coupons.findAll().then(data => {
      res.status(200).send()
    })
  }
}