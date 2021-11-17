module.exports = (sequelize, datatype) => {

  const Coupon = sequelize.define('coupon', {
    couponkey : {
      type : datatype.STRING,
      allowNull : false
    },
    couponDesc : {
      type : datatype.STRING,
      allowNull : false
    },
    couponType : {
      type : datatype.STRING,
      allowNull : false
    }
  }, {
    timestamps : false
  })
  return Coupon;
}