'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Actions', [

      { name: "HTML boilerplate", url: "https://www.sitepoint.com/introduction-html5-boilerplate/" , criterionId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10000 },
      { name: "CSS", url: "https://github.com/twbs/bootstrap" , criterionId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10002 },

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

    return queryInterface.bulkDelete('Actions', null, {});

    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
