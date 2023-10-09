const { Sequelize } = require("sequelize");
/**
 *
 * @param {Sequelize} sequelize
 */
const startSequelize = async (sequelize) => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("Connection to database established!");
    console.log(
      `Models available in sequelize: ${Object.keys(sequelize.models).join(
        ", "
      )}`
    );
  } catch (e) {
    console.error("Connection to database failure!", e);
  }
};

module.exports = startSequelize;
