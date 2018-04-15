const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const db = require('../models')
const multer  = require('multer')
const Upload = require('s3-uploader');
const uploadService = multer({storage: multer.memoryStorage(), limits: {fileSize: 1000 * 1000 * 12}});
const AWS = requrie('aws-sdk')


//
// module.exports = function(app) {
//
// //Use Multer uploader
//
// // Amazon s3 config
// const s3 = new AWS.S3()
// AWS.config.update(
//   {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     subregion: 'us-west-2',
//   });
//
// const router = new express.Router();
//
// // Multer config
// // memory storage keeps file data in a buffer
// const upload = multer({
//   storage: multer.memoryStorage(),
//   // file size limitation in bytes
//   limits: { fileSize: 52428800 },
// });

// router.post('/upload', upload.single('theseNamesMustMatch'), (req, res) => {
//   // req.file is the 'theseNamesMustMatch' file
//   s3.putObject({
//       Bucket: 'your-bucket-name',
//       Key: 'your-key-name',
//       Body: req.file.buffer,
//       ACL: 'public-read', // your permisions
//     }, (err) => {
//       if (err) return res.status(400).send(err);
//       res.send('File uploaded to S3');
// })


  //SHOW USER
  app.get('/users/:userId', function(req, res) {
    console.log('SHOW user:', req.params.userId);
    const id = req.params.userId;

    db.User.findOne({ where: {id} }).then((userData) => {
      const user = userData.dataValues;
      if (!user) {
        // User not found
        return res.status(400).send({ message: 'Cannot get user' });
      }
      res.status(200);
      res.json({
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        bio: user.bio,
        avatarURL: user.avatarURL
      });
    })
    .catch((err) => {
      if (err) {
        res.status(400);
        res.json({
          message: "Cannot get user"
        });
      }
    })

  });

  //SHOW PROFILE
  app.get('/profile', function(req, res) {
    if (req.user) {
      const username = req.user.username;
      db.User.findOne({ where: { username } }).then((userData) => {
        const user = userData.dataValues;
        if (!user) {
          // User not found
          return res.status(400).send({ message: 'Cannot get user' });
        }
        res.status(200);
        res.json({
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          bio: user.bio,
          avatarURL: user.avatarURL
        });
      })
      .catch((err) => {
        if (err) {
          res.status(400);
          res.json({
            message: "Cannot get user"
          });
        }
      })
    } else {
      res.status(401);
      res.json({
        message: "Not logged in"
      })
    }
  })

  // UPDATE USER
  app.put('/users/:userId', function(req, res) {
    console.log('PUT user:', req.params.userId);

    res.redirect('/');
  });

  // Get User Name
  app.get('/user/:username', function(req, res) {
    // console.log('PUT user:', req.params.userId);
    const username = req.params.username

    const userId = req.params.id
    const user = req.body
    db.User.update(user, {
      where: { username: username }
    }).then((response) => {
        res.status(200)
        res.json({
          message: 'Get user successfully!',
        })
      }).catch((err) => {
        console.log(err);
        res.status(400);
        res.json({
          message: "Error!",
          error: err
        })
      })
    });


  //DELETE USER
  app.delete('/users/:userId', function(req, res) {
    console.log('DELETE user:', req.params.userId);

    db.User.destroy({
      where: {
        id: req.params.userId
      }
    }).then(() => {
      db.User.findOne({
        where: {
          id: req.params.userId
        }
      }).then((user) => {
        if (!user) {
          res.send('Deleting user!')
        } else {
          res.send('Error deleting user');
        }
      })
    }).catch((err) => {
      console.log(err);
      res.json( {
        message: "Error deleting user",
        error: err
      });
    });
  });
}
