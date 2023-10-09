const express = require("express");
const { Router } = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const sequelize = require("./config/sequelize.js");
const startSequelize = require("./utils/startSequelize.js");
const cors = require("cors");

require("./models/users.js");
require("./models/doctors.js");
require("./models/appointments.js");
const usersRouter = require("./routes/users.js");
const doctorsRouter = require("./routes/doctors.js");
const appointmentsRouter = require("./routes/appointments.js");

dotenv.config();

const app = express();
const router = Router();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(bodyParser.json());

const corsOptions = {
  origin: "https://github.com/zakdii/belajar-express1-fe",
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
