const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const User = sequelize.define("Users", {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

module.exports = require("./users.js").default;
module.exports = User;
