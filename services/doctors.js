const Doctor = require("../models/doctors.js");

const findDoctorById = async (id) => {
  return await Doctor.findOne({ where: { id } });
};

const findDoctor = async () => {
  return await Doctor.findAll();
};

const addDoctor = async (idDoctor, namaDoctor, spesialisasi, picture, bio) => {
  return await Doctor.create({
    idDoctor,
    namaDoctor,
    spesialisasi,
    picture,
    bio,
  });
};

module.exports = {
  findDoctorById,
  findDoctor,
  addDoctor,
};
