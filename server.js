
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

//**** ALLOW CORS ****//
// var allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// }
// var whitelist = ['http://localhost:3000', 'https://localhost:3000']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

//**** MIDDLEWARE ****//
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(acceptOverride())
app.use(cors())

// Auth Middleware
var checkAuth = function (req, res, next) {
  console.log("Checking authentication");

  if (typeof req.cookies.RubricsApp === 'undefined' || req.cookies.RubricsApp === null) {
    req.user = null;
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
  .catch( e => console.log("Error(s): ", e))
});
