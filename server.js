
//**** DEPENDENCIES ****//
require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//**** SEQUELIZE ****//
const Sequelize = require('sequelize');
const sequelize = new Sequelize('rubric_dev', 'postgres', null, { dialect: 'postgres' });
const sync = () => {
  return sequelize.sync({ force: true })
}

//**** ALLOW CORS ****//
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

//**** MIDDLEWARE ****//
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(acceptOverride())
app.use(function (req, res, next) {
  var format = req.query.format
  if (format) { req.headers.accept = 'application/' + format }
  next();
});

// **** CONTROLLERS **** //
require('./controllers/auth-controller.js')(app);
require('./controllers/rubric-controller.js')(app);

app.get('/', function(req, res) {
  console.log('GET index');
  res.send('index');
});

var PORT = process.env.PORT || 8000;

app.listen(PORT, function(req, res) {
  console.log("Rubrics App listening on port 8000!");
  sync()
    .then(() => console.log('... and Database synced!'))
    .catch( e => console.log(e))
});
