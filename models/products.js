module.exports = (sequelize, datatype) => {

  const Products = sequelize.define('product', {
    productname : {
      type : datatype.STRING,
      allowNull : false
    },
    productDesc : {
      type : datatype.STRING,
      allowNull : false
    },
    productPrice : {
      type : datatype.STRING,
      allowNull : false
    },
    productCategory : {
      type : datatype.STRING,
      allowNull : false
    }
  })
  return Products;
}