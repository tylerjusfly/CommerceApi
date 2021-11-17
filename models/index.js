const Sequelize = require('Sequelize');
const customer = require('./customer.js');
const users = require('./users.js');
// instatiating sequelizer
const sequelize = new Sequelize('cohort3engrs', 'momoh', 'tylerjusfly', {
  host : "localhost",
  dialect : "mysql",
  pool : {
    max : 5,
    min : 1,
    acquire : 5000,
    idle : 1000

  }
})

sequelize.authenticate()
  .then(()=> {
    console.log("DB Connected")
  })
  .catch(err =>{
    console.log("could not establish connnection", err)
  });

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.admin = require('./admin.js')(sequelize, Sequelize);
  db.users = require('./users.js')(sequelize, Sequelize);
  db.customers = require('./customer.js')(sequelize, Sequelize);
  db.products = require('./products.js')(sequelize, Sequelize);
  db.coupon = require('./coupon.js')(sequelize, Sequelize);

  // Creating one to one relationships
  db.users.hasOne(db.customers);
  db.customers.belongsTo(db.users);

  db.users.hasOne(db.admin);
  db.admin.belongsTo(db.users);

  //  Creating a one to many relationships
  db.customers.hasMany(db.products);
  db.products.belongsTo(db.customers);

  // Many to Many relationships.
db.customers.belongsToMany(db.coupon, {through : 'couponuser' });
db.coupon.belongsToMany(db.customers, {through : 'couponuser'});

  module.exports = db;