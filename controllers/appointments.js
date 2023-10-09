const express = require("express");
const { httpStatusMesage } = require("../constants/httpStatusMessage.js");
const {
  addAppointment,
  findAppointmentbyId,
} = require("../services/appointments.js");

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
const getAppointmentById = async (request, response) => {
  const { id } = request.params;
  const appointments = await findAppointmentbyId(id);

  response.json({
    data: appointments,
    message: httpStatusMesage[response.statusCode],
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
const createAppointment = async (request, response) => {
  const { nama, email, noHP, namaDoctor, appointmentDate, pesan } =
    request.body;
  const appointments = await addAppointment(
    nama,
    email,
    noHP,
    namaDoctor,
    appointmentDate,
    pesan
  );

  console.log({ body: request.body });
  response.json({
    data: appointments,
    message: httpStatusMesage[response.statusCode],
  });
};

module.exports = {
  getAppointmentById,
  createAppointment,
};
