const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const Doctor = sequelize.define("Doctors", {
  idDoctor: DataTypes.STRING,
  namaDoctor: DataTypes.STRING,
  spesialisasi: DataTypes.STRING,
  picture: DataTypes.STRING,
  bio: DataTypes.STRING,
});

module.exports = require("./doctors.js").default;
module.exports = Doctor;
