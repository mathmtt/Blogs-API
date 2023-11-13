const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const mailValidate = (email) => regexMail.test(email);

const userValidate = (req, res, next) => {
  const { displayName, email, password } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
    );
  }
  if (password.length < 6) {
    return res.status(400).json(
      { 
        message: '"password" length must be at least 6 characters long',
      },
    );
  }
  if (!mailValidate(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

module.exports = userValidate;