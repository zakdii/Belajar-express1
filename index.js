import express from "express";
import { Router } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import sequelize from "./config/sequelize.js";
import { startSequelize } from "./utils/startSequelize.js";
import cors from "cors";

import "./models/index.js";
import usersRouter from "./routes/users.js";
import doctorsRouter from "./routes/doctors.js";
import appointmentsRouter from "./routes/appointments.js";

dotenv.config();

const app = express();
const router = Router();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(bodyParser.json());

const corsOptions = {
  origin:
    "https://kampus-merdeka-software-engineering.github.io/FE-Palembang-29/",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 200, // Beberapa browser memerlukan status 200
};

app.use(cors(corsOptions));

app.use(router);
router.use("/api/users", usersRouter);
router.use("/api/doctors", doctorsRouter);
router.use("/api/appointments", appointmentsRouter);

startSequelize(sequelize);

app.listen(port, () => {
  console.log("Server is running at port : " + port);
});
