'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Criteria', [
              { text: "Can write the basic HTML boilerplate from memory",  level: 1, scaleId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10000 },
              { text: "Needs to look up tags occasionally from documentation",  level: 1, scaleId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10001 },
              { text: "Can write basic and advanced HTML tags from memory",  level: 2, scaleId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10002 },
              { text: "Uses HTML tags semantically, e.g. uses structural tags (section, header, footer, article, etc.)",  level: 3, scaleId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10003 },
              { text: "Indentation is flawless",  level: 2, scaleId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10004 },
              { text: "Has experience with one templating engine",  level: 2, scaleId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10005 },
              { text: "Has experience with a few templating engines",  level: 3, scaleId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10006 },
              { text: "Has experience and expertise with multiple templating engines",  level: 4, scaleId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10007 },
              { text: "Can use advanced HTML tags such as meta tags, title tags, and optimize page load time",  level: 3, scaleId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10008 },
              { text: "Has manipulated and written HTML programmatically",  level: 4, scaleId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10009 },

              { text: "Can use basic selectors like class and id",  level: 1, scaleId: 10006, createdAt: new Date(), updatedAt: new Date(), id: 10010 },
              { text: "Knows all major CSS selectors",  level: 2, scaleId: 10006, createdAt: new Date(), updatedAt: new Date(), id: 10011 },
              { text: "Understands advanced selectors like nth-child(), and ::before and can see where to apply them when needed",  level: 3, scaleId: 10006, createdAt: new Date(), updatedAt: new Date(), id: 10012 },
              { text: "Can use all basic properties and styles",  level: 1, scaleId: 10007, createdAt: new Date(), updatedAt: new Date(), id: 10013 },
              { text: "Remembers the simplest CSS attributes and has to look up advanced ones",  level: 1, scaleId: 10008, createdAt: new Date(), updatedAt: new Date(), id: 10014 },
              { text: "Can add Bootstrap and use responsive Grid, Navbar, and typography helpers",  level: 1, scaleId: 10009, createdAt: new Date(), updatedAt: new Date(), id: 10015 },
              { text: "Can apply Bootstrap/use the conventional styles to make conventionally looking web pages",  level: 2, scaleId: 10009, createdAt: new Date(), updatedAt: new Date(), id: 10016 },
              { text: "Can modify frameworks and bend them easily to your will",  level: 3, scaleId: 10009, createdAt: new Date(), updatedAt: new Date(), id: 10017 },
              { text: "Can style pages without a framework like Bootstrap",  level: 4, scaleId: 10009, createdAt: new Date(), updatedAt: new Date(), id: 10018 },
              { text: "Has mastered Float and Flexbox",  level: 2, scaleId: 10010, createdAt: new Date(), updatedAt: new Date(), id: 10019 },
              { text: "Pages are all mobile responsive",  level: 2, scaleId: 10011, createdAt: new Date(), updatedAt: new Date(), id: 10020 },
              { text: "Can apply advanced CSS3",  level: 3, scaleId: 10012, createdAt: new Date(), updatedAt: new Date(), id: 10021 },
              { text: "Can employ advanced features of CSS3 in surprising and creative ways",  level: 4, scaleId: 10013, createdAt: new Date(), updatedAt: new Date(), id: 10022 },
              { text: "Is familiar with advanced CSS build systems and scripting, e.g. Sass and Compass",  level: 4, scaleId: 10014, createdAt: new Date(), updatedAt: new Date(), id: 10023 },

              { text: "Can use simple JS or jQuery to manipulate the DOM to make sites interactive",  level: 1, scaleId: 10015, createdAt: new Date(), updatedAt: new Date(), id: 10024 },
              { text: "Can use jQuery and vanilla JavaScript to make AJAX requests load and manipulate JSON data from web APIs",  level: 2, scaleId: 10015, createdAt: new Date(), updatedAt: new Date(), id: 10025 },
              { text: "Can define variables and functions and use basic control flow",  level: 1, scaleId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10026 },
              { text: "Can write Object-Oriented JavaScript",  level: 2, scaleId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10027 },
              { text: "Can explain and utilize protypical inheritance",  level: 3, scaleId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10028 },
              { text: "Has used functional JavaScript",  level: 4, scaleId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10029 },
              { text: "Can include and use external front end libraries",  level: 1, scaleId: 10017, createdAt: new Date(), updatedAt: new Date(), id: 10030 },
              { text: "Has utilized cutting edge JavaScript projects (e.g., Universal JavaScript, Electron, Phonegap, React Native, Johnny5, etc.)",  level: 3, scaleId: 10017, createdAt: new Date(), updatedAt: new Date(), id: 10031 },
              { text: "Has published their own frameworks, libraries, or npm modules",  level: 4, scaleId: 10017, createdAt: new Date(), updatedAt: new Date(), id: 10032 },
              { text: "Can debug client-side js in the console",  level: 1, scaleId: 10018, createdAt: new Date(), updatedAt: new Date(), id: 10033 },
              { text: "Have all of the array methods in your toolbelt",  level: 2, scaleId: 10019, createdAt: new Date(), updatedAt: new Date(), id: 10034 },
              { text: "Understand the Math object",  level: 2, scaleId: 10020, createdAt: new Date(), updatedAt: new Date(), id: 10035 },
              { text: "Know the difference between setInterval and setTimeout",  level: 2, scaleId: 10021, createdAt: new Date(), updatedAt: new Date(), id: 10036 },
              { text: "Can use bower or another simple build system to manage front end packages",  level: 2, scaleId: 10022, createdAt: new Date(), updatedAt: new Date(), id: 10037 },
              { text: "Can use advanced build systems such as gulp, grunt, webpack, npm, etc. to manage front end packages",  level: 3, scaleId: 10022, createdAt: new Date(), updatedAt: new Date(), id: 10038 },
              { text: "Is familiar with the key differences with ES6 and ES5",  level: 3, scaleId: 10023, createdAt: new Date(), updatedAt: new Date(), id: 10039 },
              { text: "Is very comfortable with ES6 and also familiar with JS alternatives (e.g., JSX, Typescript, etc.)",  level: 4, scaleId: 10023, createdAt: new Date(), updatedAt: new Date(), id: 10040 },
              { text: "Can create a Single Page Application (SPA) using libraries like React.js, Angular.js, or Vue.js",  level: 3, scaleId: 10024, createdAt: new Date(), updatedAt: new Date(), id: 10041 },
              { text: "Can create SPAs with fluency using a stack of advanced front end frameworks and build systems",  level: 4, scaleId: 10024, createdAt: new Date(), updatedAt: new Date(), id: 10042 },
              { text: "Has mastered a few cutting edge JavaScript projects",  level: 4, scaleId: 10025, createdAt: new Date(), updatedAt: new Date(), id: 10043 },
              { text: "Can build a front end framework and components from scratch",  level: 4, scaleId: 10026, createdAt: new Date(), updatedAt: new Date(), id: 10044 },

              { text: "Creates a local server and define simple resource routes",  level: 1, scaleId: 10027, createdAt: new Date(), updatedAt: new Date(), id: 10045 },
              { text: "Can create a backend server that handles multiple routes using REST.  Applies RESTful routing appropriately",  level: 2, scaleId: 10027, createdAt: new Date(), updatedAt: new Date(), id: 10046 },
              { text: "Server shows quality construction and organization.  Models are well crafted.",  level: 3, scaleId: 10027, createdAt: new Date(), updatedAt: new Date(), id: 10047 },
              { text: "Can draw, explain, and utilize the MVC structure for their server",  level: 1, scaleId: 10028, createdAt: new Date(), updatedAt: new Date(), id: 10048 },
              { text: "Can make queries that join two or more resources",  level: 2, scaleId: 10029, createdAt: new Date(), updatedAt: new Date(), id: 10049 },
              { text: "Can make advanced queries that involve three or more resources",  level: 3, scaleId: 10029, createdAt: new Date(), updatedAt: new Date(), id: 10050 },
              { text: "Can use external APIs",  level: 2, scaleId: 10030, createdAt: new Date(), updatedAt: new Date(), id: 10051 },
              { text: "Can return templates or build a fully RESTful API",  level: 2, scaleId: 10031, createdAt: new Date(), updatedAt: new Date(), id: 10052 },
              { text: "Can use an authentication library, but not roll own auth",  level: 2, scaleId: 10032, createdAt: new Date(), updatedAt: new Date(), id: 10053 },
              { text: "Can roll their own authentication",  level: 3, scaleId: 10032, createdAt: new Date(), updatedAt: new Date(), id: 10054 },
              { text: "Can roll their own third party authentications",  level: 4, scaleId: 10032, createdAt: new Date(), updatedAt: new Date(), id: 10055 },
              { text: "Can scrape and parse the DOM",  level: 2, scaleId: 10033, createdAt: new Date(), updatedAt: new Date(), id: 10056 },
              { text: "Can write and use a scrape",  level: 3, scaleId: 10033, createdAt: new Date(), updatedAt: new Date(), id: 10057 },
              { text: "Uses websockets to acheive real-time user interactions",  level: 3, scaleId: 10034, createdAt: new Date(), updatedAt: new Date(), id: 10058 },
              { text: "Can use third party authentications",  level: 3, scaleId: 10035, createdAt: new Date(), updatedAt: new Date(), id: 10059 },
              { text: "Can build their own SDK with authentication",  level: 4, scaleId: 10035, createdAt: new Date(), updatedAt: new Date(), id: 10060 },
              { text: "Can use JWT for authentication",  level: 3, scaleId: 10036, createdAt: new Date(), updatedAt: new Date(), id: 10061 },
              { text: "Can connect to smart devices and other exotic APIs",  level: 4, scaleId: 10037, createdAt: new Date(), updatedAt: new Date(), id: 10062 },

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

    return queryInterface.bulkDelete('Criteria', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
