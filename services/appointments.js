const Appointment = require("../models/appointments.js");
const Validator = require("fastest-validator");

const findAppointmentbyId = async (id) => {
  return await Appointment.findOne({ where: { id } });
};

const findAppointment = async () => {
  return await Appointment.findAll();
};

const schema = {
  nama: { type: "string", optional: false },
  email: { type: "email", optional: false },
  noHP: { type: "string", optional: false },
  namaDoctor: { type: "string", optional: false },
  appointmentDate: { type: "string", optional: false },
  pesan: { type: "string", optional: true },
};

const validator = new Validator();
const newValidator = validator.compile(schema);

const addAppointment = async (
  nama,
  email,
  noHP,
  namaDoctor,
  appointmentDate,
  pesan
) => {
  const validationResult = newValidator({
    nama,
    email,
    noHP,
    namaDoctor,
    appointmentDate,
    pesan,
  });

  try {
    if (validationResult !== true) {
      return { error: validationResult };
    } else {
      const appointment = await Appointment.create({
        nama,
        email,
        noHP,
        namaDoctor,
        appointmentDate,
        pesan,
      });
    }
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  findAppointmentbyId,
  findAppointment,
  addAppointment,
};
