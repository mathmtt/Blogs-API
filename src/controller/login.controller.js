const ServiceLogin = require('../services/login.service');

const loginHandle = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const token = await ServiceLogin.execute(email, password);
  if (token === null) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  return res.status(200).json({ token });
};

module.exports = {
  loginHandle,
};
