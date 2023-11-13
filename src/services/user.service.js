const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const tokenConfig = (payload) => jwt.sign(payload, JWT_SECRET);

const execute = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });
  const { id } = user;
  const token = tokenConfig({ displayName, id });
  return token;
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getUserMail = async (email) => {
  const user = await User.findOne(
    { 
      where: { email }, 
    },
  );
  return user;
};

module.exports = {
  execute,
  getAllUsers,
  getUserMail,
};