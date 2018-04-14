'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Scales', [
              { name: "Basic HTML Boilerplate",  competencyId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10000 },
              { name: "HTML From Memory",  competencyId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10001 },
              { name: "Indentation",  competencyId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10002 },
              { name: "Templating Engines",  competencyId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10003 },
              { name: "Advanced HTML Tags",  competencyId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10004 },
              { name: "Programmatic HTML",  competencyId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10005 },

              { name: "Selectors",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10006 },
              { name: "Basic Properties and Styles",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10007 },
              { name: "Simple Attributes",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10008 },
              { name: "Boilerplate CSS Frameworks",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10009 },
              { name: "Float and Flexbox",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10010 },
              { name: "Mobile Responsiveness",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10011 },
              { name: "Transitions and Animations",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10012 },
              { name: "Creativity",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10013 },
              { name: "Build Systems and Scripting",  competencyId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10014 },

              { name: "Vanilla JS and jQuery",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10015 },
              { name: "Concepts in JS",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10016 },
              { name: "External JS Libraries",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10017 },
              { name: "Debugging",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10018 },
              { name: "Array Methods",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10019 },
              { name: "The Math Object",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10020 },
              { name: "setInterval and setTimeout",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10021 },
              { name: "Build Systems",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10022 },
              { name: "ES6 and Beyond",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10023 },
              { name: "Single Page Applications",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10024 },
              { name: "Projects",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10025 },
              { name: "Building Frameworks",  competencyId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10026 },

              { name: "Server Quality",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10027 },
              { name: "Understanding of MVC",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10028 },
              { name: "Querying",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10029 },
              { name: "External APIs",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10030 },
              { name: "Fully RESTful API",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10031 },
              { name: "Authentication",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10032 },
              { name: "Scrapes",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10033 },
              { name: "Websockets",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10034 },
              { name: "Third Party Authentication",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10035 },
              { name: "JWT Authentication",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10036 },
              { name: "Connectivity to Smart Devices",  competencyId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10037 },

              { name: "Local Dev Server",  competencyId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10038 },
              { name: "Live Remote Server",  competencyId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10039 },
              { name: "Encrypts Passwords",  competencyId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10040 },
              { name: "Used Server Plugins",  competencyId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10041 },
              { name: "Dot-Env",  competencyId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10042 },
              { name: "Analytics Implementation",  competencyId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10043 },
              { name: "Remote Hosts",  competencyId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10044 },
              { name: "Data Leaks",  competencyId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10045 },
              { name: "Continuous Integration",  competencyId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10046 },
              { name: "Containers",  competencyId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10047 },
              { name: "Classic Attack Protection",  competencyId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10048 },
              { name: "EC2 On Load Balanced Server",  competencyId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10049 },
              { name: "Advanced Statistical Analysis",  competencyId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10050 },

              { name: "Integrated Routes Tests",  competencyId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10051 },
              { name: "Unit Model Tests",  competencyId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10052 },
              { name: "Test Coverage",  competencyId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10053 },
              { name: "Testing Libraries",  competencyId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10054 },
              { name: "Testing Auth Routes",  competencyId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10055 },
              { name: "Test Driven Development",  competencyId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10056 },
              { name: "Uncomfortable Without Tests",  competencyId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10057 },

              { name: "Proficiency",  competencyId: 10006, createdAt: new Date(), updatedAt: new Date(), id: 10058 },
              { name: "One-to-Many",  competencyId: 10006, createdAt: new Date(), updatedAt: new Date(), id: 10059 },
              { name: "ORM/ODM Commands",  competencyId: 10006, createdAt: new Date(), updatedAt: new Date(), id: 10060 },
              { name: "Many-to-Many",  competencyId: 10006, createdAt: new Date(), updatedAt: new Date(), id: 10061 },
              { name: "Backups and DB Transfer",  competencyId: 10006, createdAt: new Date(), updatedAt: new Date(), id: 10062 },

              //Scale for Success
              { name: "Timeliness",  competencyId: 10014, createdAt: new Date(), updatedAt: new Date(), id: 10063 },
              { name: "Absenses",  competencyId: 10014, createdAt: new Date(), updatedAt: new Date(), id: 10064 },
              { name: "Responsiveness",  competencyId: 10014, createdAt: new Date(), updatedAt: new Date(), id: 10065 },
              { name: "Awareness",  competencyId: 10014, createdAt: new Date(), updatedAt: new Date(), id: 10066 },
              { name: "Organization",  competencyId: 10014, createdAt: new Date(), updatedAt: new Date(), id: 10067 },
              { name: "Responsibility",  competencyId: 10014, createdAt: new Date(), updatedAt: new Date(), id: 10068 },
              { name: "Creditation",  competencyId: 10014, createdAt: new Date(), updatedAt: new Date(), id: 10069 },
              { name: "Hygiene",  competencyId: 10014, createdAt: new Date(), updatedAt: new Date(), id: 10070 },

              { name: "Daily Agenda",  competencyId: 10015, createdAt: new Date(), updatedAt: new Date(), id: 10071 },
              { name: "Coding",  competencyId: 10015, createdAt: new Date(), updatedAt: new Date(), id: 10072 },
              { name: "Prioritizes",  competencyId: 10015, createdAt: new Date(), updatedAt: new Date(), id: 10073 },
              { name: "Scoping",  competencyId: 10015, createdAt: new Date(), updatedAt: new Date(), id: 10074 },
              { name: "Planning",  competencyId: 10015, createdAt: new Date(), updatedAt: new Date(), id: 10075 },
              { name: "Code Committing",  competencyId: 10015, createdAt: new Date(), updatedAt: new Date(), id: 10076 },

              { name: "Deadlines",  competencyId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10077 },
              { name: "Ownership",  competencyId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10078 },
              { name: "Delegation",  competencyId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10079 },
              { name: "Seek Feedback",  competencyId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10080 },
              { name: "Voicing Opinion",  competencyId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10081 },
              { name: "Receptiveness",  competencyId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10082 },
              //Proficiency isnt supposed to be one
              // { name: "Proficiency",  competencyId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10083 },
              //Scale Id needs to be decremented by one  from here on
              { name: "Feedback (Code)",  competencyId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10083 },
              { name: "Gives Feedback",  competencyId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10084 },

              { name: "Self-Improvement",  competencyId: 10017, createdAt: new Date(), updatedAt: new Date(), id: 10085 },
              { name: "Habits",  competencyId: 10017, createdAt: new Date(), updatedAt: new Date(), id: 10086 },
              { name: "Mindset",  competencyId: 10017, createdAt: new Date(), updatedAt: new Date(), id: 10087 },
              { name: "Risk-Taking",  competencyId: 10017, createdAt: new Date(), updatedAt: new Date(), id: 10088 },
              { name: "Self-reliance",  competencyId: 10017, createdAt: new Date(), updatedAt: new Date(), id: 10089 },
              { name: "Empathy",  competencyId: 10017, createdAt: new Date(), updatedAt: new Date(), id: 10090 },

              { name: "Core Communication",  competencyId: 10018, createdAt: new Date(), updatedAt: new Date(), id: 10091 },
              { name: "Mannerisms",  competencyId: 10018, createdAt: new Date(), updatedAt: new Date(), id: 10092 },
              { name: "Communication Level",  competencyId: 10018, createdAt: new Date(), updatedAt: new Date(), id: 10093 },
              { name: "Public Speaking",  competencyId: 10018, createdAt: new Date(), updatedAt: new Date(), id: 10094 },
              { name: "Situational Awareness",  competencyId: 10018, createdAt: new Date(), updatedAt: new Date(), id: 10095 },

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

    return queryInterface.bulkDelete('Scales', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
