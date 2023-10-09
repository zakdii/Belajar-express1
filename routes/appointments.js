const { Router } = require("express");
const {
  getAppointmentById,
  createAppointment,
} = require("../controllers/appointments.js");

const appointmentsRouter = Router();

appointmentsRouter.get("/:id", getAppointmentById);

appointmentsRouter.post("/", createAppointment);

module.exports = appointmentsRouter;
