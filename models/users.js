module.exports =(sequelize, datatype) => {
  const Users = sequelize.define('users',{
    firstname : {
      type : datatype.STRING,
      allowNull : false
    },
    lastname : {
      type : datatype.STRING,
      allowNull : false
    },
    gender : {
      type : datatype.STRING,
      allowNull : false
    },
    username : {
      type : datatype.STRING,
      allowNull : false,
      unique : true,
      validate: {
        len: {
          args: [6,10],
          msg : "username cannot exceed 10 or be below 6"
        }
      }
    },
    password : {
      type : datatype.STRING,
      allowNull : false
    }
  });
  
  return Users;
}