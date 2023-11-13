const serviceUser = require('../services/user.service');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await serviceUser.getUserMail(email);
  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const token = await serviceUser.execute(displayName, email, password, image);

  return res.status(201).json({ token });
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await serviceUser.getUser(id);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(user);
};

const getAllUsers = async (_req, res) => {
  const users = await serviceUser.getAllUsers();
  return res.status(200).json(users);
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
};
