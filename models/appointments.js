const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const Appointment = sequelize.define("Appointment", {
  nama: DataTypes.STRING,
  email: DataTypes.STRING,
  noHP: DataTypes.STRING,
  namaDoctor: DataTypes.STRING,
  appointmentDate: DataTypes.STRING,
  pesan: DataTypes.STRING,
  // Tambahkan bidang lain yang relevan untuk janji temu
});

module.exports = require("./appointments.js").default;
module.exports = Appointment;
