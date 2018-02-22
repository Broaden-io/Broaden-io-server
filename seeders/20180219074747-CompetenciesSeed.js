'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Competencies', [
              { name: "HTML and Templating",  rubricId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10000 },
              { name: "CSS",  rubricId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10001 },
              { name: "Client-Side Javascript",  rubricId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10002 },
              { name: "Backend Skills",  rubricId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10003 },
              { name: "DevOps and Security",  rubricId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10004 },
              { name: "Testing and Debugging",  rubricId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10005 },
              { name: "Databases - SQL and NoSQL",  rubricId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10006 },
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
    
    return queryInterface.bulkDelete('Competencies', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
