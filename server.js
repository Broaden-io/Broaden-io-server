
//**** DEPENDENCIES ****//
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//**** MIDDLEWARE ****//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// **** CONTROLLERS **** //
require('./controllers/auth-controller.js')(app);
require('./controllers/rubric-controller.js')(app);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(req, res) {
  console.log("listening!");
});
