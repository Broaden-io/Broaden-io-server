
//**** DEPENDENCIES ****//
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const acceptOverride = require('connect-acceptoverride');
var cors = require('cors')
const db = require("./models");

//**** MIDDLEWARE ****//
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(acceptOverride())
app.use(cors())

// Auth Middleware
var checkAuth = function (req, res, next) {

  req.header.auth

  if (typeof req.cookies.RubricsApp === 'undefined' || req.cookies.RubricsApp === null) {
    req.user = null;
    console.log("null user in checkAuth")
  } else {
    const token = req.cookies.RubricsApp;
    const decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }
  next();
}
app.use(checkAuth);


// **** CONTROLLERS **** //
require('./controllers/auth-controller.js')(app);
require('./controllers/rubrics-controller.js')(app);
require('./controllers/users-controller.js')(app);
require('./controllers/competencies-controller.js')(app);
require('./controllers/scales-controller.js')(app);
require('./controllers/criteria-controller.js')(app);

app.get('/', function(req, res) {
  console.log('GET index');
  //   bcrypt.hash("Fake123", 10).then(function(hash) {
  //     // Store hash in your password DB.
  //     console.log('Sample PW Hash is:', hash)
  // });

  res.send('Rubrics App backend up and running!');
});

var PORT = process.env.PORT || 8000;

app.listen(PORT, function(req, res) {
  console.log("Rubrics App listening on port " + PORT + "...");
  db.sequelize.sync({ force: false })
  .then(() => console.log('... Sequelize synced with Database!'))
  .catch(e => console.log("Errors syncing with Sequelize: ", e))
});
