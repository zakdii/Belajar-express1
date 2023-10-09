const express = require("express");
const {
  signUp,
  findUserById,
  signIn,
  destroyUserById,
} = require("../services/users.js");
const { httpStatusMesage } = require("../constants/httpStatusMessage.js");

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
const getUserById = async (request, response) => {
  const { id } = request.params;
  const user = await findUserById(id);

  response.json({
    data: user,
    message: httpStatusMesage[response.statusCode],
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
const createAccount = async (request, response) => {
  const { username, email, password } = request.body;
  const user = await signUp(username, email, password);

  console.log({ body: request.body });
  response.json({
    data: user,
    message: httpStatusMesage[response.statusCode],
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
const signInAccount = async (request, response) => {
  const { email, password } = request.body;
  const user = await signIn(email, password);

  console.log({ body: request.body });
  response.json({
    data: user,
    message: httpStatusMesage[response.statusCode],
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
const deleteUserById = async (request, response) => {
  const { id } = request.params;
  const user = await destroyUserById(id);

  response.json({
    data: user,
    message: httpStatusMesage[response.statusCode],
  });
};

module.exports = {
  getUserById,
  createAccount,
  signInAccount,
  deleteUserById,
};
