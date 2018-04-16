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

              { text: "Runs projects in your local development server",  level: 1, scaleId: 10038, createdAt: new Date(), updatedAt: new Date(), id: 10063 },
              { text: "Deploys their site to a live remote server",  level: 1, scaleId: 10039, createdAt: new Date(), updatedAt: new Date(), id: 10064 },
              { text: "Encrypts passwords",  level: 1, scaleId: 10040, createdAt: new Date(), updatedAt: new Date(), id: 10065 },
              { text: "Has used server plugins e.g. for logging, emails, scheduling tasks, uptime monitoring, bug tracking, etc...",  level: 2, scaleId: 10041, createdAt: new Date(), updatedAt: new Date(), id: 10066 },
              { text: "Can encrypt and hide their keys using a dotenv library or another secure pattern",  level: 2, scaleId: 10042, createdAt: new Date(), updatedAt: new Date(), id: 10067 },
              { text: "Has implemented simple analytics, e.g. google analytics",  level: 2, scaleId: 10043, createdAt: new Date(), updatedAt: new Date(), id: 10068 },
              { text: "Has implemented some more advanced analytics, e.g. funnels, cohorts, conversion rates",  level: 3, scaleId: 10043, createdAt: new Date(), updatedAt: new Date(), id: 10069 },
              { text: "Can use more than one type of remote host, e.g. Heroku, AWS Google",  level: 3, scaleId: 10044, createdAt: new Date(), updatedAt: new Date(), id: 10070 },
              { text: "Can implement and optimize a scalable web host on various hosts",  level: 4, scaleId: 10044, createdAt: new Date(), updatedAt: new Date(), id: 10071 },
              { text: "Can make a threat matrix for their server and fix simple data leaks",  level: 3, scaleId: 10045, createdAt: new Date(), updatedAt: new Date(), id: 10072 },
              { text: "Can fix complex data leaks",  level: 4, scaleId: 10045, createdAt: new Date(), updatedAt: new Date(), id: 10073 },
              { text: "Has used continuous integration",  level: 4, scaleId: 10046, createdAt: new Date(), updatedAt: new Date(), id: 10074 },
              { text: "Has used containers",  level: 4, scaleId: 10047, createdAt: new Date(), updatedAt: new Date(), id: 10075 },
              { text: "Protects against classical attacks",  level: 4, scaleId: 10048, createdAt: new Date(), updatedAt: new Date(), id: 10076 },
              { text: "Can roll their own host using EC2 or their own load balanced server",  level: 4, scaleId: 10049, createdAt: new Date(), updatedAt: new Date(), id: 10077 },
              { text: "Logs everything, conducts advanced statistical analysis for key metrics",  level: 4, scaleId: 10050, createdAt: new Date(), updatedAt: new Date(), id: 10078 },

              { text: "Can write simple integrated/route tests",  level: 1, scaleId: 10051, createdAt: new Date(), updatedAt: new Date(), id: 10079 },
              { text: "Can write simple unit/model tests",  level: 1, scaleId: 10052, createdAt: new Date(), updatedAt: new Date(), id: 10080 },
              { text: "Has minimal test coverage (≤30%) of major projects",  level: 1, scaleId: 10053, createdAt: new Date(), updatedAt: new Date(), id: 10081 },
              { text: "Has medium test coverage (≥50%) of major projects",  level: 2, scaleId: 10053, createdAt: new Date(), updatedAt: new Date(), id: 10082 },
              { text: "Has high test coverage (≥80%) of major projects",  level: 3, scaleId: 10053, createdAt: new Date(), updatedAt: new Date(), id: 10083 },
              { text: "Is comfortable with various assertion libraries and fixtures",  level: 2, scaleId: 10054, createdAt: new Date(), updatedAt: new Date(), id: 10084 },
              { text: "Can use advanced test libraries for hard to test scenarios, e.g. spy, super-agent, assertion libraries, cheerio, etc...",  level: 3, scaleId: 10054, createdAt: new Date(), updatedAt: new Date(), id: 10085 },
              { text: "Has used advanced testing libraries to optimize their testing environment such as an auto-tester, and Travis CL",  level: 4, scaleId: 10054, createdAt: new Date(), updatedAt: new Date(), id: 10086 },
              { text: "Can test authentication routes",  level: 2, scaleId: 10055, createdAt: new Date(), updatedAt: new Date(), id: 10087 },
              { text: "Is familiar with Test Driven Development (TDD)",  level: 2, scaleId: 10056, createdAt: new Date(), updatedAt: new Date(), id: 10088 },
              { text: "Can code in TDD on demand",  level: 3, scaleId: 10056, createdAt: new Date(), updatedAt: new Date(), id: 10089 },
              { text: "Feels uncomfortable without tests",  level: 4, scaleId: 10057, createdAt: new Date(), updatedAt: new Date(), id: 10090 },

              { text: "Can use either a SQL or a NoSQL database",  level: 1, scaleId: 10058, createdAt: new Date(), updatedAt: new Date(), id: 10091 },
              { text: "Can use both SQL and NoSQL databases",  level: 2, scaleId: 10058, createdAt: new Date(), updatedAt: new Date(), id: 10092 },
              { text: "Can analyze and optimize a SQL or NoSQL database",  level: 3, scaleId: 10058, createdAt: new Date(), updatedAt: new Date(), id: 10093 },
              { text: "Can run a stack that uses both SQL and NoSQL databases to optimize reading, writing, and analytics",  level: 4, scaleId: 10058, createdAt: new Date(), updatedAt: new Date(), id: 10094 },
              { text: "Can make simple associations between resources (one-to-many)",  level: 1, scaleId: 10059, createdAt: new Date(), updatedAt: new Date(), id: 10095 },
              { text: "Can use ORM/ODM commands to interface with the database",  level: 1, scaleId: 10060, createdAt: new Date(), updatedAt: new Date(), id: 10096 },
              { text: "Can use ORM/ODM and use the command line to interact with database",  level: 2, scaleId: 10060, createdAt: new Date(), updatedAt: new Date(), id: 10097 },
              { text: "Can make and query advanced associations (many-to-many)",  level: 2, scaleId: 10061, createdAt: new Date(), updatedAt: new Date(), id: 10098 },
              { text: "Can pipe data between databases as well as create and restore backups",  level: 3, scaleId: 10062, createdAt: new Date(), updatedAt: new Date(), id: 10099 },


              { text: "Late 1 or 2 times per week",  level: 1, scaleId: 30063, createdAt: new Date(), updatedAt: new Date(), id: 40100 },
              { text: "Almost never late late <1x/wk",  level: 2, scaleId: 30063, createdAt: new Date(), updatedAt: new Date(), id: 40101 },
              { text: "On time to all meetings",  level: 3, scaleId: 30063, createdAt: new Date(), updatedAt: new Date(), id: 40102 },
              { text: "Arrives early, rarely absent",  level: 4, scaleId: 30063, createdAt: new Date(), updatedAt: new Date(), id: 40103 },

              { text: "Does not notify of tardy/absence",  level: 1, scaleId: 30064, createdAt: new Date(), updatedAt: new Date(), id: 40104 },
              { text: "Mostly notifies of absence",  level: 2, scaleId: 30064, createdAt: new Date(), updatedAt: new Date(), id: 40105 },
              { text: "Always notifies of absence",  level: 3, scaleId: 30064, createdAt: new Date(), updatedAt: new Date(), id: 40106 },
              { text: "Always notifies in advance",  level: 4, scaleId: 30064, createdAt: new Date(), updatedAt: new Date(), id: 40107 },

              { text: "Responds to most slack and email within 48 hrs",  level: 1, scaleId: 30065, createdAt: new Date(), updatedAt: new Date(), id: 40108 },
              { text: "Responds to slack/email within 36 hrs",  level: 2, scaleId: 30065, createdAt: new Date(), updatedAt: new Date(), id: 40109 },
              { text: "Responds to most slack and email day-of",  level: 3, scaleId: 30065, createdAt: new Date(), updatedAt: new Date(), id: 40110 },
              { text: "Responds to all slack and email day-of",  level: 4, scaleId: 30065, createdAt: new Date(), updatedAt: new Date(), id: 40111 },

              { text: "Situational awareness sometimes results in violating the code of conduct",  level: 1, scaleId: 30066, createdAt: new Date(), updatedAt: new Date(), id: 40112 },
              { text: "Situational awareness rarely violates code of conduct",  level: 2, scaleId: 30066, createdAt: new Date(), updatedAt: new Date(), id: 40113 },
              { text: "Situational awareness never results in violating the code of conduct",  level: 3, scaleId: 30066, createdAt: new Date(), updatedAt: new Date(), id: 40114 },
              { text: "Advanced situational awareness assists others in norming",  level: 4, scaleId: 30066, createdAt: new Date(), updatedAt: new Date(), id: 40115 },

              { text: "Disorganization and lack of planning creates other issues",  level: 1, scaleId: 30067, createdAt: new Date(), updatedAt: new Date(), id: 40116 },
              { text: "Organization and planning rarely creates other issues",  level: 4, scaleId: 30067, createdAt: new Date(), updatedAt: new Date(), id: 40117 },

              { text: "Disorganization and lack of planning creates other issues",  level: 1, scaleId: 30068, createdAt: new Date(), updatedAt: new Date(), id: 40118 },
              { text: "Organization and planning rarely creates other issues",  level: 2, scaleId: 30068, createdAt: new Date(), updatedAt: new Date(), id: 40119 },
              { text: "Explains rare cases of unmet expectations on own words and actions",  level: 3, scaleId: 30068, createdAt: new Date(), updatedAt: new Date(), id: 40120 },
              { text: "Always takes responsibility for all words and actions",  level: 4, scaleId: 30068, createdAt: new Date(), updatedAt: new Date(), id: 40121 },

              { text: "Shows gratitude and gives shout outs to teammates rarely",  level: 1, scaleId: 30069, createdAt: new Date(), updatedAt: new Date(), id: 40122 },
              { text: "Shows gratitude and shout outs to teammates sometimes",  level: 2, scaleId: 30069, createdAt: new Date(), updatedAt: new Date(), id: 40123 },
              { text: "Shows gratitude and gives shout outs to teammates often",  level: 3, scaleId: 30069, createdAt: new Date(), updatedAt: new Date(), id: 40124 },
              { text: "Leader in gratitude in the form of thanks, shout outs, and acknowledgements",  level: 4, scaleId: 30070, createdAt: new Date(), updatedAt: new Date(), id: 40125 },

              { text: "Maintains proper personal hygiene 0-2 days/wk",  level: 1, scaleId: 30070, createdAt: new Date(), updatedAt: new Date(), id: 40126 },
              { text: "Maintains proper personal hygiene 3-5 days/wk",  level: 2, scaleId: 30070, createdAt: new Date(), updatedAt: new Date(), id: 40127 },
              { text: "Maintains proper personal hygiene 5 days/wk",  level: 3, scaleId: 30070, createdAt: new Date(), updatedAt: new Date(), id: 40128 },
              { text: "Impeccable hygiene and personal presentation 5 days/wk",  level: 4, scaleId: 30070, createdAt: new Date(), updatedAt: new Date(), id: 40129 },

              { text: "Distracted at work often, does not silence alerts or soc med.",  level: 1, scaleId: 30071, createdAt: new Date(), updatedAt: new Date(), id: 40130 },
              { text: "Distracted at work occasionally, silences some alerts & soc med",  level: 2, scaleId: 30071, createdAt: new Date(), updatedAt: new Date(), id: 40131 },
              { text: "Distractions at work prevented through self-discipline and app blockers",  level: 3, scaleId: 30071, createdAt: new Date(), updatedAt: new Date(), id: 40132 },
              { text: "Proactively plans day to work",  level: 4, scaleId: 30071, createdAt: new Date(), updatedAt: new Date(), id: 40133 },

              { text: "Codes <2 hrs a day",  level: 1, scaleId: 30072, createdAt: new Date(), updatedAt: new Date(), id: 40134 },
              { text: "Codes ~3 hours a day",  level: 2, scaleId: 30072, createdAt: new Date(), updatedAt: new Date(), id: 40135 },
              { text: "Codes 4+ hours a day",  level: 3, scaleId: 30072, createdAt: new Date(), updatedAt: new Date(), id: 40136 },
              { text: "Codes 5+ hours a day",  level: 4, scaleId: 30072, createdAt: new Date(), updatedAt: new Date(), id: 40137 },

              { text: "Prioritizes side projects and events over work",  level: 1, scaleId: 30073, createdAt: new Date(), updatedAt: new Date(), id: 40138 },
              { text: "Prioritizes learning and growth, some side projects",  level: 2, scaleId: 30073, createdAt: new Date(), updatedAt: new Date(), id: 40139 },
              { text: "Prioritizes learning and growth",  level: 3, scaleId: 30073, createdAt: new Date(), updatedAt: new Date(), id: 40140 },
              { text: "Prioritizes learning & growth by creating personal out-of-work stretch challenges",  level: 4, scaleId: 30073, createdAt: new Date(), updatedAt: new Date(), id: 40141 },

              { text: "Accomplishes <80% of stated goals. Scope creep prevents on-time follow-through",  level: 1, scaleId: 30074, createdAt: new Date(), updatedAt: new Date(), id: 40142 },
              { text: "Accomplishes  80%+ of stated goals, occasional scope creep",  level: 2, scaleId: 30074, createdAt: new Date(), updatedAt: new Date(), id: 40143 },
              { text: "Accomplishes 100% of stated tasks/goals. Focuses and scopes work appropriately",  level: 3, scaleId: 30074, createdAt: new Date(), updatedAt: new Date(), id: 40144 },
              { text: "Can scope ambitious goals and execute a plan to achieve it",  level: 4, scaleId: 30074, createdAt: new Date(), updatedAt: new Date(), id: 40145 },

              { text: "To-do list organization negatively impacts work",  level: 1, scaleId: 30075, createdAt: new Date(), updatedAt: new Date(), id: 40146 },
              { text: "To-do list organization attempts a “single source of truth”",  level: 2, scaleId: 30075, createdAt: new Date(), updatedAt: new Date(), id: 40147 },
              { text: "To-do list organization keeps a “single source of truth”",  level: 3, scaleId: 30075, createdAt: new Date(), updatedAt: new Date(), id: 40148 },
              { text: "To-do list Is remarkably organized",  level: 4, scaleId: 30075, createdAt: new Date(), updatedAt: new Date(), id: 40149 },

              { text: "Commits some days",  level: 1, scaleId: 30076, createdAt: new Date(), updatedAt: new Date(), id: 40150 },
              { text: "Commits almost every day",  level: 2, scaleId: 30076, createdAt: new Date(), updatedAt: new Date(), id: 40151 },
              { text: "Commits every day",  level: 3, scaleId: 30076, createdAt: new Date(), updatedAt: new Date(), id: 40152 },
              { text: "Commits multiple times per day",  level: 4, scaleId: 30076, createdAt: new Date(), updatedAt: new Date(), id: 40153 },

              { text: "Deadlines missed without advanced notice",  level: 1, scaleId: 30077, createdAt: new Date(), updatedAt: new Date(), id: 40154 },
              { text: "Deadlines sometimes missed, yet seeks support",  level: 2, scaleId: 30077, createdAt: new Date(), updatedAt: new Date(), id: 40155 },
              { text: "Deadlines always set & kept",  level: 3, scaleId: 30077, createdAt: new Date(), updatedAt: new Date(), id: 40156 },
              { text: "Coaches others to effectively set and keep deadlines",  level: 4, scaleId: 30077, createdAt: new Date(), updatedAt: new Date(), id: 40157 },

              { text: "Takes on tasks prioritized by others",  level: 1, scaleId: 30078, createdAt: new Date(), updatedAt: new Date(), id: 40158 },
              { text: "Takes ownership over tasks but is sometimes confused on what to prioritize",  level: 2, scaleId: 30078, createdAt: new Date(), updatedAt: new Date(), id: 40159 },
              { text: "Takes ownership of the success of their areas and tasks",  level: 3, scaleId: 30078, createdAt: new Date(), updatedAt: new Date(), id: 40160 },
              { text: "Creates projects that other students can join",  level: 4, scaleId: 30078, createdAt: new Date(), updatedAt: new Date(), id: 40161 },


              { text: "Receives responsibilities from others, coordinating work with team is challenging",  level: 1, scaleId: 30079, createdAt: new Date(), updatedAt: new Date(), id: 40162 },
              { text: "Delegates so everyone has clear responsibilities matched to strengths",  level: 2, scaleId: 30079, createdAt: new Date(), updatedAt: new Date(), id: 40163 },
              { text: "Delegates so everyone has clear responsibilities/work roadmaps matched to strengths",  level: 3, scaleId: 30079, createdAt: new Date(), updatedAt: new Date(), id: 40164 },
              { text: "Delegates stupendously: communicates desired results, relevant resources, expectations of accountability, timeline, and consequences of work",  level: 4, scaleId: 30079, createdAt: new Date(), updatedAt: new Date(), id: 40165 },

              { text: "Seeks perspectives from familiar peer group",  level: 1, scaleId: 30080, createdAt: new Date(), updatedAt: new Date(), id: 40166 },
              { text: "Seeks perspectives from large diverse peer group",  level: 2, scaleId: 30080, createdAt: new Date(), updatedAt: new Date(), id: 40167 },
              { text: "Seeks perspectives from outside comfort zone",  level: 3, scaleId: 30080, createdAt: new Date(), updatedAt: new Date(), id: 40168 },
              { text: "Seeks perspectives from conflicting and critical views proactively",  level: 4, scaleId: 30080, createdAt: new Date(), updatedAt: new Date(), id: 40169 },

              { text: "Voices one’s perspective rarely",  level: 1, scaleId: 30081, createdAt: new Date(), updatedAt: new Date(), id: 40170 },
              { text: "Voices perspective persistently",  level: 2, scaleId: 30081, createdAt: new Date(), updatedAt: new Date(), id: 40171 },
              { text: "Voices one’s perspective persistently, can incorporate others’ skills & talents",  level: 3, scaleId: 30081, createdAt: new Date(), updatedAt: new Date(), id: 40172 },
              { text: "Voices one’s perspective persistently, brings individual and group strengths to the forefront",  level: 4, scaleId: 30081, createdAt: new Date(), updatedAt: new Date(), id: 40173 },

              { text: "Hears feedback as rejection or criticism, difficult to overcome",  level: 1, scaleId: 30082, createdAt: new Date(), updatedAt: new Date(), id: 40174 },
              { text: "Hears feedback as combination of criticism and opportunity to improve",  level: 2, scaleId: 30082, createdAt: new Date(), updatedAt: new Date(), id: 40175 },
              { text: "Hears feedback as growth opportunity, internalizes with gratitude",  level: 4, scaleId: 30082, createdAt: new Date(), updatedAt: new Date(), id: 40176 },

              { text: "Asks for feedback on code, priorities and projects rarely",  level: 1, scaleId: 30083, createdAt: new Date(), updatedAt: new Date(), id: 40179 },
              { text: "Asks for feedback on code, priorities, projects sometime",  level: 2, scaleId: 30083, createdAt: new Date(), updatedAt: new Date(), id: 40180 },
              { text: "Asks for feedback on code, priorities, projects often",  level: 3, scaleId: 30083, createdAt: new Date(), updatedAt: new Date(), id: 40181 },
              { text: "Asks for feedback having always first tried solutions on their own",  level: 4, scaleId: 30083, createdAt: new Date(), updatedAt: new Date(), id: 40182 },

              { text: "Gives feedback (rubs wrong way)",  level: 1, scaleId: 30084, createdAt: new Date(), updatedAt: new Date(), id: 40177 },
              { text: "Leads team in reflection on how they can collectively improve",  level: 4, scaleId: 30084, createdAt: new Date(), updatedAt: new Date(), id: 40178 },


              { text: "Self-understanding and improvement is not a goal",  level: 1, scaleId: 30085, createdAt: new Date(), updatedAt: new Date(), id: 40179 },
              { text: "Self-understanding and improvement is a goal",  level: 2, scaleId: 30085, createdAt: new Date(), updatedAt: new Date(), id: 40180 },
              { text: "Self-understanding and improvement is actualized through experiments",  level: 3, scaleId: 30085, createdAt: new Date(), updatedAt: new Date(), id: 40181 },
              { text: "Searches to understand themselves better and open to being challenged",  level: 4, scaleId: 30085, createdAt: new Date(), updatedAt: new Date(), id: 40182 },

              { text: "Has difficulty managing stress, sleep, health, diet or exercise",  level: 1, scaleId: 30086, createdAt: new Date(), updatedAt: new Date(), id: 40183 },
              { text: "Maintains some healthy habits",  level: 2, scaleId: 30086, createdAt: new Date(), updatedAt: new Date(), id: 40184 },
              { text: "Maintains mostly healthy habits",  level: 3, scaleId: 30086, createdAt: new Date(), updatedAt: new Date(), id: 40185 },
              { text: "Maintains all healthy habits",  level: 4, scaleId: 30086, createdAt: new Date(), updatedAt: new Date(), id: 40186 },

              { text: "Interprets challenges with a growth mindset 60% of time",  level: 1, scaleId: 30087, createdAt: new Date(), updatedAt: new Date(), id: 40187 },
              { text: "Interprets challenges with a growth mindset 70% of time",  level: 2, scaleId: 30087, createdAt: new Date(), updatedAt: new Date(), id: 40188 },
              { text: "Interprets challenges with a growth mindset 80% of time",  level: 3, scaleId: 30087, createdAt: new Date(), updatedAt: new Date(), id: 40189 },
              { text: "Show perseverance, grit and a growth mindset by not giving up on 90-100% challenges",  level: 4, scaleId: 30086, createdAt: new Date(), updatedAt: new Date(), id: 40190 },

              { text: "Has yet to take professional risks",  level: 1, scaleId: 30088, createdAt: new Date(), updatedAt: new Date(), id: 40191 },
              { text: "Takes some professional risks but could benefit from more",  level: 2, scaleId: 30088, createdAt: new Date(), updatedAt: new Date(), id: 10092 },
              { text: "Takes many professional risks",  level: 3, scaleId: 30088, createdAt: new Date(), updatedAt: new Date(), id: 40193 },
              { text: "Takes many courageous risks",  level: 4, scaleId: 30088, createdAt: new Date(), updatedAt: new Date(), id: 40194 },

              { text: "Depends on others to guide their behavior and plans",  level: 1, scaleId: 30089, createdAt: new Date(), updatedAt: new Date(), id: 40195 },
              { text: "Depends on self mostly to guide their behavior and plans",  level: 2, scaleId: 30089, createdAt: new Date(), updatedAt: new Date(), id: 40196 },
              { text: "Depends on self to guide their own behavior and plans",  level: 3, scaleId: 30089, createdAt: new Date(), updatedAt: new Date(), id: 40197 },
              { text: "Are self-regulated in their behavior, plans, and life",  level: 4, scaleId: 30089, createdAt: new Date(), updatedAt: new Date(), id: 40198 },

              { text: "Shows effort to empathize with others",  level: 1, scaleId: 30090, createdAt: new Date(), updatedAt: new Date(), id: 40199 },
              { text: "Sometimes has empathy for the challenges of others",  level: 2, scaleId: 30090, createdAt: new Date(), updatedAt: new Date(), id: 40195 },
              { text: "Has empathy for the suffering and difficulty of others and sometimes shows compassion",  level: 3, scaleId: 30089, createdAt: new Date(), updatedAt: new Date(), id: 40196 },
              { text: "Has empathy for the suffering and shows compassion for them",  level: 4, scaleId: 30090, createdAt: new Date(), updatedAt: new Date(), id: 40197 },

              { text: "Communication often is not actionable, comes late, or in wrong channel for the purpose",  level: 1, scaleId: 30091, createdAt: new Date(), updatedAt: new Date(), id: 40198 },
              { text: "Communication is often two of the three: actionable, on time, and on the correct channel",  level: 2, scaleId: 30091, createdAt: new Date(), updatedAt: new Date(), id: 40199 },
              { text: "Communication is usually actionable, on time, and on the correct channel",  level: 3, scaleId: 30091, createdAt: new Date(), updatedAt: new Date(), id: 40195 },
              { text: "Communication is always actionable, on time, and on the correct channel",  level: 4, scaleId: 30091, createdAt: new Date(), updatedAt: new Date(), id: 40196 },

              { text: "Communication often perceived as curt, cold, or rude tone, even if that is not the intent",  level: 1, scaleId: 30092, createdAt: new Date(), updatedAt: new Date(), id: 40197 },
              { text: "Communication is perfunctory, on-topic, and appropriate",  level: 2, scaleId: 30092, createdAt: new Date(), updatedAt: new Date(), id: 40198 },
              { text: "Communication is warm and professional",  level: 3, scaleId: 30092, createdAt: new Date(), updatedAt: new Date(), id: 40199 },
              { text: "Communication is very warm and very professional",  level: 4, scaleId: 30092, createdAt: new Date(), updatedAt: new Date(), id: 40195 },

              { text: "Occasional under communication about an issue",  level: 1, scaleId: 30093, createdAt: new Date(), updatedAt: new Date(), id: 40196 },
              { text: "Over-communication happens around sensitive or critical issues",  level: 2, scaleId: 30093, createdAt: new Date(), updatedAt: new Date(), id: 40197 },
              { text: "Over-communication happens usually",  level: 2, scaleId: 30093, createdAt: new Date(), updatedAt: new Date(), id: 40198 },
              { text: "There is lots of over-communication",  level: 4, scaleId: 30093, createdAt: new Date(), updatedAt: new Date(), id: 40199 },

              { text: "Hesitates to speak up or communicate publicly",  level: 1, scaleId: 30094, createdAt: new Date(), updatedAt: new Date(), id: 40195 },
              { text: "When speaking publicly can somewhat inform, persuade, and entertain",  level: 2, scaleId: 30094, createdAt: new Date(), updatedAt: new Date(), id: 40196 },
              { text: "When speaking publicly can inform, persuade, and entertain",  level: 3, scaleId: 30094, createdAt: new Date(), updatedAt: new Date(), id: 40197 },
              { text: "When speaking publicly can deeply engage audience, resulting in laughs, changed behavior and standing ovations",  level: 4, scaleId: 30094, createdAt: new Date(), updatedAt: new Date(), id: 40198 },

              { text: "Contextual literacy results in inappropriate language and behavior based on the situation",  level: 1, scaleId: 30095, createdAt: new Date(), updatedAt: new Date(), id: 40199 },
              { text: "Contextual literacy mostly  results in appropriate language and behavior",  level: 2, scaleId: 30095, createdAt: new Date(), updatedAt: new Date(), id: 40195 },
              { text: "Contextual literacy results in the appropriate language and behavior based on the situation",  level: 3, scaleId: 30095, createdAt: new Date(), updatedAt: new Date(), id: 40196 },
              { text: "Contextual literacy is fluent - can effortlessly read and adapt to different situations",  level: 4, scaleId: 30095, createdAt: new Date(), updatedAt: new Date(), id: 40197 },

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
