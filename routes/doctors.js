const { Router } = require("express");
const {
  getDoctor,
  getDoctorbyId,
  postDoctor,
} = require("../controllers/doctors.js");

const doctorsRouter = Router();

doctorsRouter.get("/", getDoctor);

doctorsRouter.get("/:id", getDoctorbyId);

doctorsRouter.post("/", postDoctor);

module.exports = doctorsRouter;
