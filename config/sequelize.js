const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_URL
  // process.env.MYSQLDATABASE,
  // process.env.MYSQLUSER,
  // process.env.MYSQLPASSWORD,
  // {
  //   dialect: "mysql",
  //   dialectModule: mysql2,
  //   host: process.env.MYSQLHOST,
  //   port: process.env.MYSQLPORT,
  //   dialect: process.env.DB_DIALECT,
  // }
);

module.exports = sequelize;
