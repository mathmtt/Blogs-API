const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;
const tokenConfig = (payload) => jwt.sign(payload, JWT_SECRET);

const execute = async (email, password) => {
  console.log('chegou aqui');
  const user = await User.findOne({ 
    where: { email, password }, 
    attributes: { exclude: ['email', 'password'] }, 
  });
  console.log(user);
  if (!user) return null;
  const { displayName, id } = user;
  const token = tokenConfig({ displayName, id });
  return token;
};

module.exports = {
  execute,
};