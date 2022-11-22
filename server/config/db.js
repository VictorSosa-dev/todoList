const { Sequelize } = require('sequelize');

if(process.env['NODE_ENV'] === 'production'){
    module.exports = new Sequelize(process.env['DATABASE_URL']);
}else{
    module.exports = new Sequelize(
      process.env['DB_DATABASE'], 
      process.env['DB_USER'], 
      process.env['DB_PASSWORD'], 
      {
        host: process.env['DB_HOST'],
        dialect: process.env['DIALECT'],
        port: process.env['DB_PORT'],
        logging: false
      });
}