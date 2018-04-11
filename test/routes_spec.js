process.env.NODE_ENV = 'test'

// import chai, { expect } from 'chai'
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const db = require('../models');

chai.use(chaiHttp)

// describe('API Routes', () => {
//
//   // start with a fresh DB
//   beforeEach(done => {
//     db.sequelize.sync({ force: true, match: /_test$/, logging: false })
//     .then(() => {
//       return seed(db)
//     }).then(() => {
//       done()
//     })
//
//   })
//
//   describe('GET /users/:userId', (done) => {
//     it('should get a list of users', (done) => {
//       chai.request(app)
//       .get('/users/:userId')
//       .end((err, res) => {
//         expect(res.status).to.equal(200)
//         expect(res).to.be.json
//         expect(res.body).to.be.a('array')
//         done()
//       })
//     })
//   })
//
// })
