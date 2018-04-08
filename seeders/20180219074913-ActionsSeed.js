'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Actions', [

      { name: "HTML boilerplate", url: "https://www.sitepoint.com/introduction-html5-boilerplate/" , criterionId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10000 },
      { name: "Writing HTML", url: "https://www.w3schools.com/html/" , criterionId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10001 },
      { name: "Writing HTML", url: "https://www.w3schools.com/html/html_basic.asp" , criterionId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10002 },
      { name: "Writing HTML", url: "https://www.codecademy.com/courses/web-beginner-en-HZA3b/0/1?curriculum_id=50579fb998b470000202dc8b" , criterionId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10003 },
      { name: "Writing HTML", url: "https://www.w3schools.com/html/html_styles.asp" , criterionId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10004 },
      { name: "Writing Templates", url: "https://www.impressivewebs.com/w3schools-ugly-bad-good/" , criterionId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10005 },
      { name: "Writing HTML", url: "https://www.impressivewebs.com/w3schools-ugly-bad-good/" , criterionId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10006 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 1000 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10008 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10009 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 10006, createdAt: new Date(), updatedAt: new Date(), id: 100010 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 10007, createdAt: new Date(), updatedAt: new Date(), id: 100011 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 10008, createdAt: new Date(), updatedAt: new Date(), id: 100012 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 10009, createdAt: new Date(), updatedAt: new Date(), id: 100013 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100010, createdAt: new Date(), updatedAt: new Date(), id: 100014 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100011, createdAt: new Date(), updatedAt: new Date(), id: 100015 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100012, createdAt: new Date(), updatedAt: new Date(), id: 100016 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100013, createdAt: new Date(), updatedAt: new Date(), id: 100017 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100014, createdAt: new Date(), updatedAt: new Date(), id: 100018 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100015, createdAt: new Date(), updatedAt: new Date(), id: 100019 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100016, createdAt: new Date(), updatedAt: new Date(), id: 100020 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100017, createdAt: new Date(), updatedAt: new Date(), id: 100021 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100018, createdAt: new Date(), updatedAt: new Date(), id: 100022 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100019, createdAt: new Date(), updatedAt: new Date(), id: 100023 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100020, createdAt: new Date(), updatedAt: new Date(), id: 100024 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100021, createdAt: new Date(), updatedAt: new Date(), id: 100025 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100022, createdAt: new Date(), updatedAt: new Date(), id: 100026 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100022, createdAt: new Date(), updatedAt: new Date(), id: 100027 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100022, createdAt: new Date(), updatedAt: new Date(), id: 100028 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100023, createdAt: new Date(), updatedAt: new Date(), id: 100029 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100023, createdAt: new Date(), updatedAt: new Date(), id: 100030 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100023, createdAt: new Date(), updatedAt: new Date(), id: 100031 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100023, createdAt: new Date(), updatedAt: new Date(), id: 100032 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100023, createdAt: new Date(), updatedAt: new Date(), id: 100033 },
      { name: "Writing HTML", url: "https://www.codecademy.com/catalog/language/html-css" , criterionId: 100023, createdAt: new Date(), updatedAt: new Date(), id: 100034 },

      { name: "JavaScript", url: "https://www.w3schools.com/js/js_intro.asp", criterionId: 10024, createdAt: new Date(), updatedAt: new Date(), id: 10035 },
      { name: "JavaScript", url: "https://www.w3schools.com/html/html_scripts.asp" , criterionId: 10024, createdAt: new Date(), updatedAt: new Date(), id: 10036 },
      { name: "JavaScript", url: "https://www.codecademy.com/catalog/language/javascript" , criterionId: 10024, createdAt: new Date(), updatedAt: new Date(), id: 10037 },
      { name: "JavaScript", url: "https://www.codecademy.com/catalog/language/javascript" , criterionId: 10024, createdAt: new Date(), updatedAt: new Date(), id: 10038 },
      { name: "JavaScript", url: "https://www.codecademy.com/catalog/language/javascript" , criterionId: 10025, createdAt: new Date(), updatedAt: new Date(), id: 10039 },
      { name: "JavaScript", url: "https://www.codecademy.com/catalog/language/javascript" , criterionId: 10026, createdAt: new Date(), updatedAt: new Date(), id: 10040 },
      { name: "JavaScript", url: "https://www.codecademy.com/catalog/language/javascript" , criterionId: 10027, createdAt: new Date(), updatedAt: new Date(), id: 10041 },
      { name: "JavaScript", url: "https://www.codecademy.com/catalog/language/javascript" , criterionId: 10028, createdAt: new Date(), updatedAt: new Date(), id: 10042 },
      { name: "JavaScript", url: "https://www.codecademy.com/catalog/language/javascript" , criterionId: 10029, createdAt: new Date(), updatedAt: new Date(), id: 10043 },
      { name: "JavaScript", url: "https://www.codecademy.com/catalog/language/javascript" , criterionId: 10030, createdAt: new Date(), updatedAt: new Date(), id: 10044 },
      { name: "JavaScript", url: "https://www.codecademy.com/catalog/language/javascript" , criterionId: 10031, createdAt: new Date(), updatedAt: new Date(), id: 10045 },
      { name: "JavaScript", url: "https://www.codecademy.com/catalog/language/javascript" , criterionId: 10032, createdAt: new Date(), updatedAt: new Date(), id: 10046 },
      { name: "JavaScript", url: "https://www.codecademy.com/catalog/language/javascript" , criterionId: 10033, createdAt: new Date(), updatedAt: new Date(), id: 10047 },
      { name: "JavaScript", url: "https://www.codecademy.com/catalog/language/javascript" , criterionId: 10034, createdAt: new Date(), updatedAt: new Date(), id: 10048 },
      { name: "JavaScript", url: "https://www.codecademy.com/catalog/language/javascript" , criterionId: 10035, createdAt: new Date(), updatedAt: new Date(), id: 10049 },
      { name: "JavaScript", url: "https://www.codecademy.com/catalog/language/javascript" , criterionId: 10036, createdAt: new Date(), updatedAt: new Date(), id: 10050 },
      // { name: "Writing client side", url: , criterionId: 1000, createdAt: new Date(), updatedAt: new Date(), id: 1000 },
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
