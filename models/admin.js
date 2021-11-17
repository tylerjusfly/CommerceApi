module.exports = (sequelize, datatype) => {
  const admin = sequelize.define('admin', {
    dob : {
      type : datatype.STRING
    },
    address : {
      type : datatype.STRING
    },
    bankname : {
      type : datatype.STRING
    }
  })
  return admin
}

