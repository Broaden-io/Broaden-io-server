const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const db = require('../models')

module.exports = function(app) {

  //SIGN UP - CREATE USER
  app.post('/signup', function(req, res, next) {
    console.log('POST signup');
    const username = req.body.username;
    const password = req.body.password;
    const passwordConfirm = req.body.confirmation;

    // Check password confirmation
    if (password !== passwordConfirm) {
      // Passwords don't match
      res.send('Password does not match confirmation! Please try again');
    }

    db.User.create({
      username,
      password,
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      avatar_url: req.body.avatar_url,
      bio: req.body.bio
    }).then((user) => {
      // Create a new jwt token
      const token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: "60 days"
      });
      // Set a cookie
      res.cookie('Rubrics App', token, { maxAge: 100000, httpOnly: false });
      // Respond with confirmation
      res.status(200)
      res.json({
        msg: 'Recipe added successfully!',
        user: {
          username,
          email: req.body.email,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          avatar_url: req.body.avatar_url,
          bio: req.body.bio
        }
      })
    })
    .catch((err) => {
      if (err) {
        console.log("Uhh oh!! ", err.message)
        res.error(err)
      }
    })

  });

  //LOGIN USER
  app.post('/login', function(req, res, next) {
    console.log('POST login');
    res.redirect('/');
  });

  //LOGOUT USER
  app.get('/logout', function(req, res) {
    console.log('GET logout');
    res.redirect('/');
  });

  //SHOW USER
  app.get('/user/:userId', function(req, res) {
    console.log('SHOW user:', req.params.userId);
    res.redirect('/');
  });

  //UPDATE USER
  app.put('/user/:userId', function(req, res) {
    console.log('PUT user:', req.params.userId);
    res.redirect('/');
  });

  //DELETE USER
  app.delete('/user/:userId', function(req, res) {
    console.log('DELETE user:', req.params.userId);
    res.redirect('/');
  });

}
