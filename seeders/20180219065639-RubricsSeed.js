'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Rubrics', [
              { name: "Full Stack Web Skills", iconName: 'web', description: "Make School's rubric for assessing competencies and getting a job as a professional in full stack web", userId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10000 },
              { name: "Full Stack Mobile Skills", iconName: 'stay_current_portrait', description: "Make School's rubric for assessing competencies and getting a job as a professional in full stack mobile", userId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10001 },
              { name: "Success Skills", iconName: 'wb_sunny', description: "Make School's rubric for assessing competencies for professional skills and best practices", userId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10002 },
              { name: "Internship & Job Readiness", iconName: 'work', description: "Make School's rubric for assessing competencies and readiness for getting a job/internship", userId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10003 },
              { name: "Technical Interview: Junior Lvl Engineer", iconName: 'code', description: "Make School's rubric for assessing competencies technical interviewing and whiteboarding", userId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10004 },
          ], {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Rubrics', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
