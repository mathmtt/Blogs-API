const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;
  const auth = authorization.slice(7);
  if (!auth || auth === '') {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const user = jwt.verify(auth, JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authenticate;
