const Sequelize = require('sequelize');
const config = require('../config/dbinfo');
const sequelize = new Sequelize(config.database, config.username, config.password, {
    logging: console.log, //显示执行sql语句
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    pool: {   //连接池设置
      max: 5, //最大连接数
      min: 0, //最小连接数
      idle: 10000
    },
    timezone:"+08:00" //我国处于东八区 比起标准时间加8个钟
  });
  
module.exports = sequelize