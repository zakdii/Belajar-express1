const User = require("../models/users.js");
const bcrypt = require("bcrypt");
const Validator = require("fastest-validator");

const findUserById = async (id) => {
  return await User.findOne({ where: { id } });
};

// Skema validasi untuk signUp
const signUpSchema = {
  username: { type: "string", optional: false },
  email: { type: "email", optional: false },
  password: { type: "string", min: 6 }, // Password minimal 6 karakter
};

const validator = new Validator();
const signUpValidator = validator.compile(signUpSchema);

const signUp = async (username, email, password) => {
  const validationResult = signUpValidator({ username, email, password });

  if (validationResult !== true) {
    return { error: validationResult };
  }

  // Mengenkripsi password dengan bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return { error: "Email sudah terdaftar" };
    }

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    return user;
  } catch (error) {
    return { error: error.message };
  }
};

const signIn = async (email, password) => {
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return { error: "Email tidak terdaftar" };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return { error: "Password salah" };
    }

    return { message: "Login berhasil" };
  } catch (error) {
    return { error: error.message };
  }
};

const destroyUserById = async (id) => {
  return await User.destroy({ where: { id } });
};

module.exports = {
  findUserById,
  signUp,
  signIn,
  destroyUserById,
};
