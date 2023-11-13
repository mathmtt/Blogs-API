const express = require('express');
const loginController = require('./controller/login.controller');
const userController = require('./controller/user.controller');
const userValidate = require('./middleware/userValidate');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.get('/teste', (_request, response) => {
  response.send('Test Route');
});
// ...
app.post('/login', loginController.loginHandle);

app.post('/user', userValidate, userController.createUser);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
