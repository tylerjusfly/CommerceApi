module.exports = (sequelize, datatype) => {

  const Customer = sequelize.define('customers', {
    bankname : {
      type : datatype.STRING,
      allowNull : false
    },
    cardnumber : {
      type : datatype.INTEGER,
      allowNull : false,
      validate : {
        len : {
          args : [11],
          msg : "Card Number Is Invalid"
        }
      }
     },
    nextOfKin : {
      type : datatype.STRING,
      allowNull : false
    }
  }, {
    timestamps : false
  })
  return Customer;
}


