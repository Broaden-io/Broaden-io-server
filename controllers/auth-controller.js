var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

module.exports = function(app) {
  app.get('/login', function(req, res) {
    console.log('GET login');
    res.redirect('/');
  });

  app.post('/login', function(req, res, next) {
    console.log('POST login');
    res.redirect('/');
  });

  app.get('/logout', function(req, res) {
    console.log('GET logout');
    res.redirect('/');
  });

  app.post('/signup', function(req, res, next) {
    console.log('POST signup');
    res.redirect('/');
  });

  app.post('/signup', function(req, res, next) {
    console.log('GET signup');
    res.redirect('/');
  });
}
