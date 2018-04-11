process.env.NODE_ENV = 'test';

const db_connect = require('../models');
const User = require('../models/user');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);

// // Setup test db
// before((done) => {
//   db_connect.open().then(() => { done(); }).catch(done);
// });
//
// // Tear down test db
// after((done) => {
//   db_connect.close().then(() => { done(); }).catch(done);
// });

// describe('Authentication', () => {
//   // Reset database before each test
//   beforeEach((done) => {
//     User.destroy({}, (err) => { done(); });
//   });
//
//   /*
//    *  Test Registering a New User
//    */
//   describe('POST /auth/register', () => {
//
//     context('should not create a new user if', () => {
//       it('username is missing', (done) => {
//         let user = {
//           username: '',
//           email: 'user@gmail.com',
//           password: 'password'
//         };
//
//         chai.request(server)
//             .post('/auth/register')
//             .send(user)
//             .end((err, res) => {
//               res.should.have.status(400);
//               res.body.should.be.a('object');
//               res.body.should.have.property('status').eql('Failed');
//               res.body.should.have.property('message');
//               res.body.message.should.contain('Path `username` is required.');
//               done();
//             });
//       });
//
//       it('email address is missing', (done) => {
//         let user = {
//           username: 'test-user',
//           email: '',
//           password: 'password'
//         };
//
//         chai.request(server)
//             .post('/auth/register')
//             .send(user)
//             .end((err, res) => {
//               res.should.have.status(400);
//               res.body.should.be.a('object');
//               res.body.should.have.property('status').eql('Failed');
//               res.body.should.have.property('message');
//               res.body.message.should.contain('Path `email` is required.');
//               done();
//             });
//       });
//
//       it('password is missing', (done) => {
//         let user = {
//           username: 'test-user',
//           email: 'user@gmail.com',
//           password: ''
//         };
//
//         chai.request(server)
//             .post('/auth/register')
//             .send(user)
//             .end((err, res) => {
//               res.should.have.status(400);
//               res.body.should.be.a('object');
//               res.body.should.have.property('status').eql('Failed');
//               res.body.should.have.property('message');
//               res.body.message.should.contain('Path `password` is required.');
//               done();
//             });
//       });
//
//       it('username is too short', (done) => {
//         let user = {
//           username: 'test',
//           email: 'user@gmail.com',
//           password: 'password'
//         };
//
//         chai.request(server)
//             .post('/auth/register')
//             .send(user)
//             .end((err, res) => {
//               res.should.have.status(400);
//               res.body.should.be.a('object');
//               res.body.should.have.property('status').eql('Failed');
//               res.body.should.have.property('message');
//               res.body.message.should.contain('Username is too short.');
//               done();
//             });
//       });
//
//       it('password is too short', (done) => {
//         let user = {
//           username: 'test-user',
//           email: 'user@gmail.com',
//           password: 'pass'
//         };
//
//         chai.request(server)
//             .post('/auth/register')
//             .send(user)
//             .end((err, res) => {
//               res.should.have.status(400);
//               res.body.should.be.a('object');
//               res.body.should.have.property('status').eql('Failed');
//               res.body.should.have.property('message');
//               res.body.message.should.contain('Password is too short.');
//               done();
//             });
//       });
//
//       it('email is invalid', (done) => {
//         let user = {
//           username: 'test-user',
//           email: 'user@mail',
//           password: 'password'
//         };
//
//         chai.request(server)
//             .post('/auth/register')
//             .send(user)
//             .end((err, res) => {
//               res.should.have.status(400);
//               res.body.should.be.a('object');
//               res.body.should.have.property('status').eql('Failed');
//               res.body.should.have.property('message');
//               res.body.message.should.contain('Not a valid email address.');
//               done();
//             });
//       });
//
//       it('a user already exists with that username', (done) => {
//         let user = new User({
//           username: 'username',
//           email: 'user@mail.com',
//           password: 'password'
//         });
//
//         user.save((err) => {
//           chai.request(server)
//               .post('/auth/register')
//               .send({
//                 username: user.username,
//                 email: 'mail@mail.com',
//                 password: 'password'
//               })
//               .end((err, res) => {
//                 res.should.have.status(403);
//                 res.body.should.have.property('status').eql('Forbidden');
//                 res.body.should.have.property('message');
//                 res.body.message.should.contain('A user already exists with that username or email address.');
//                 done();
//               });
//         });
//       });
//
//       it('a user already exists with that email', (done) => {
//         let user = new User({
//           username: 'username',
//           email: 'user@mail.com',
//           password: 'password'
//         });
//
//         user.save((err) => {
//           chai.request(server)
//               .post('/auth/register')
//               .send({
//                 username: 'user-name',
//                 email: user.email,
//                 password: 'password'
//               })
//               .end((err, res) => {
//                 res.should.have.status(403);
//                 res.body.should.have.property('status').eql('Forbidden');
//                 res.body.should.have.property('message');
//                 res.body.message.should.contain('A user already exists with that username or email address.');
//                 done();
//               });
//         });
//       });
//     });
//
//     context('should create a new user if', () => {
//       it('user properties are valid', (done) => {
//         let user = {
//           username: 'test-user',
//           email: 'user@gmail.com',
//           password: 'password'
//         };
//
//         chai.request(server)
//             .post('/auth/register')
//             .send(user)
//             .end((err, res) => {
//               res.should.have.status(201);
//               res.body.should.be.a('object');
//               res.body.should.have.property('status').eql('Success');
//               res.body.should.have.property('message');
//               res.body.message.should.contain(`${user.username} was created.`);
//               done();
//           });
//       });
//     });
//   });
//
//     context('should return unauthorized request if', () => {
//       it('email does not match a user\'s email', (done) => {
//         user.save((err, saved_user) => {
//           chai.request(server)
//               .post('/auth/login')
//               .set('Content-Type', 'application/json')
//               .send({
//                 email: 'not@mail.com',
//                 password: 'password'
//               })
//               .end((err, res) => {
//                 res.should.have.status(401);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('status').eql('Unauthorized');
//                 res.body.should.have.property('message');
//                 res.body.message.should.contain('Please check credentials and try again.');
//                 done();
//               });
//         });
//       });
//
//       it('password does not match user\'s passsword', (done) => {
//         user.save((err, saved_used) => {
//           chai.request(server)
//               .post('/auth/login')
//               .set('Content-Type', 'application/json')
//               .send({
//                 email: 'user@mail.com',
//                 password: 'wrong'
//               })
//               .end((err, res) => {
//                 res.should.have.status(401);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('status').eql('Unauthorized');
//                 res.body.should.have.property('message');
//                 res.body.message.should.contain('Please check credentials and try again.');
//                 done();
//               });
//         });
//       });
//     });
//
// });
