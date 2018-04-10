'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Actions', [

      { name: "HTML Boilerplate", url: "https://github.com/h5bp/html5-boilerplate/blob/master/src/index.html" , criterionId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10000 },
      { name: "Basic HTML", url: "https://www.w3schools.com/html/" , criterionId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10001 },
      { name: "Basic HTML", url: "https://www.w3schools.com/html/html_basic.asp" , criterionId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10002 },
      { name: "HTML", url: "https://www.youtube.com/watch?v=UB1O30fR-EE" , criterionId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10003 },
      { name: "HTML Tags Memorization", url: "https://www.youtube.com/watch?v=QZXDAGwD8Ng" , criterionId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10004 },
      { name: "", url: "https://www.impressivewebs.com/w3schools-ugly-bad-good/" , criterionId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10005 },
      { name: "Semantical HTML", url: "https://en.wikipedia.org/wiki/Semantic_HTML" , criterionId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10006 },
      { name: "", url: "https://internetingishard.com/html-and-css/semantic-html/" , criterionId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 1000 },
      { name: "", url: "https://www.lifewire.com/why-use-semantic-html-3468271" , criterionId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10008 },
      { name: "", url: "https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-indent.md" , criterionId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10009 },
      { name: "Node.js + Express - Tutorial - Handlebars Templating Engine", url: "https://www.youtube.com/watch?v=1srD3Mdvf50" , criterionId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10010 },
      { name: "Top 10 Templating Engines for JavaScript", url: "https://colorlib.com/wp/top-templating-engines-for-javascript/" , criterionId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 100011 },
      { name: "Top 10 Templating Engines for JavaScript", url: "https://colorlib.com/wp/top-templating-engines-for-javascript/" , criterionId: 10006, createdAt: new Date(), updatedAt: new Date(), id: 100012 },
      { name: "Top 10 Templating Engines for JavaScript", url: "https://colorlib.com/wp/top-templating-engines-for-javascript/" , criterionId: 10007, createdAt: new Date(), updatedAt: new Date(), id: 100013 },
      { name: "Meta tags", url: "https://www.youtube.com/watch?v=fe6OzNyDToY" , criterionId: 10008, createdAt: new Date(), updatedAt: new Date(), id: 100014 },
      { name: "", url: "https://stackoverflow.com/questions/1533568/what-is-the-correct-way-to-write-html-using-javascript?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa" , criterionId: 10009, createdAt: new Date(), updatedAt: new Date(), id: 100015 },
      { name: "", url: "https://www.w3schools.com/cssref/css_selectors.asp" , criterionId: 100010, createdAt: new Date(), updatedAt: new Date(), id: 100016 },
      { name: "Major CSS Selectors", url: "https://www.youtube.com/watch?v=qc9jgsClEJs" , criterionId: 100011, createdAt: new Date(), updatedAt: new Date(), id: 100017 },
      { name: "Selectors", url: "https://css-tricks.com/useful-nth-child-recipies/" , criterionId: 100012, createdAt: new Date(), updatedAt: new Date(), id: 100018 },
      { name: "", url: "https://www.w3schools.com/cssref/css3_pr_align-content.asp" , criterionId: 100013, createdAt: new Date(), updatedAt: new Date(), id: 100019 },
      { name: "CSS attributes", url: "http://www.htmldog.com/references/css/properties/" , criterionId: 100014, createdAt: new Date(), updatedAt: new Date(), id: 100020 },
      { name: "CSS Bootstrap", url: "https://getbootstrap.com/docs/3.3/css/" , criterionId: 100015, createdAt: new Date(), updatedAt: new Date(), id: 100021 },
      { name: "Bootstrap Convention", url: "https://www.ostraining.com/blog/coding/bootstrap-right-way/" , criterionId: 100016, createdAt: new Date(), updatedAt: new Date(), id: 100022 },
      { name: "Modify frameworks at will", url: "https://www.webdesignerdepot.com/2013/07/how-to-modify-bootstrap-simply-and-effectively/" , criterionId: 100017, createdAt: new Date(), updatedAt: new Date(), id: 100023 },
      { name: "", url: "https://www.quora.com/How-do-you-make-a-web-page-responsive-without-Bootstrap-using-only-HTML-and-CSS" , criterionId: 100018, createdAt: new Date(), updatedAt: new Date(), id: 100024 },
      { name: "Float & FlexBox", url: "https://www.w3schools.com/css/css3_flexbox.asp" , criterionId: 100019, createdAt: new Date(), updatedAt: new Date(), id: 100025 },
      { name: "CSS with Mobile Responsive", url: "https://www.w3schools.com/css/css_rwd_mediaqueries.asp" , criterionId: 100020, createdAt: new Date(), updatedAt: new Date(), id: 100026 },
      { name: "advanced CSS3", url: "http://www.htmldog.com/guides/css/advanced/" , criterionId: 100021, createdAt: new Date(), updatedAt: new Date(), id: 100027 },
      { name: "Advanced CSS", url: "http://www.htmldog.com/guides/css/advanced/transitions/" , criterionId: 100022, createdAt: new Date(), updatedAt: new Date(), id: 100028 },
      { name: "Advanced CSS", url: "https://css-tricks.com/" , criterionId: 100022, createdAt: new Date(), updatedAt: new Date(), id: 100029 },
      { name: "Advanced CSS", url: "https://css-tricks.com/" , criterionId: 100022, createdAt: new Date(), updatedAt: new Date(), id: 100030 },
      { name: "Advanced CSS", url: "https://css-tricks.com/" , criterionId: 100023, createdAt: new Date(), updatedAt: new Date(), id: 100031 },
      { name: "Sass", url: "http://sass-lang.com/" , criterionId: 100023, createdAt: new Date(), updatedAt: new Date(), id: 100032 },
      { name: "Sass", url: "https://www.youtube.com/watch?v=PRJpf-yyWZ4" , criterionId: 100023, createdAt: new Date(), updatedAt: new Date(), id: 100033 },
      { name: "Sass", url: "https://www.youtube.com/watch?v=wz3kElLbEHE" , criterionId: 100023, createdAt: new Date(), updatedAt: new Date(), id: 100034 },
      { name: "jQuery", url: "https://www.w3schools.com/jquery/default.asp", criterionId: 10024, createdAt: new Date(), updatedAt: new Date(), id: 10035 },
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
