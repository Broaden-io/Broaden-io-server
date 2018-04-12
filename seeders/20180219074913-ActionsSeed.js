'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Actions', [

      { name: "HTML Boilerplate", url: "https://github.com/h5bp/html5-boilerplate/blob/master/src/index.html" , criterionId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10000 },
      { name: "", url: "https://www.w3schools.com/html/html_basic.asp" , criterionId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10001 },
      { name: "Basic HTML", url: "https://www.w3schools.com/html/html_basic.asp" , criterionId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10002 },
      { name: "HTML", url: "https://www.youtube.com/watch?v=UB1O30fR-EE" , criterionId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10003 },
      { name: "HTML Tags Memorization", url: "https://www.youtube.com/watch?v=QZXDAGwD8Ng" , criterionId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10004 },
      { name: "", url: "https://www.impressivewebs.com/w3schools-ugly-bad-good/" , criterionId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10005 },
      { name: "Semantical HTML", url: "https://en.wikipedia.org/wiki/Semantic_HTML" , criterionId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10006 },
      { name: "", url: "https://internetingishard.com/html-and-css/semantic-html/" , criterionId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 1000 },
      { name: "", url: "https://www.lifewire.com/why-use-semantic-html-3468271" , criterionId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10008 },
      { name: "", url: "https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-indent.md" , criterionId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10009 },
      { name: "Node.js + Express - Tutorial - Handlebars Templating Engine", url: "https://www.youtube.com/watch?v=1srD3Mdvf50" , criterionId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10010 },
      { name: "Top 10 Templating Engines for JavaScript", url: "https://colorlib.com/wp/top-templating-engines-for-javascript/" , criterionId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10011 },
      { name: "", url: "https://colorlib.com/wp/top-templating-engines-for-javascript/" , criterionId: 10006, createdAt: new Date(), updatedAt: new Date(), id: 10012 },
      { name: "", url: "https://colorlib.com/wp/top-templating-engines-for-javascript/" , criterionId: 10007, createdAt: new Date(), updatedAt: new Date(), id: 10013 },
      { name: "Meta tags", url: "https://www.youtube.com/watch?v=fe6OzNyDToY" , criterionId: 10008, createdAt: new Date(), updatedAt: new Date(), id: 10014 },
      { name: "", url: "https://stackoverflow.com/questions/1533568/what-is-the-correct-way-to-write-html-using-javascript?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa" , criterionId: 10009, createdAt: new Date(), updatedAt: new Date(), id: 10015 },
      { name: "", url: "https://www.w3schools.com/cssref/css_selectors.asp" , criterionId: 10010, createdAt: new Date(), updatedAt: new Date(), id: 10016 },
      { name: "Major CSS Selectors", url: "https://www.youtube.com/watch?v=qc9jgsClEJs" , criterionId: 10011, createdAt: new Date(), updatedAt: new Date(), id: 10017 },
      { name: "Selectors", url: "https://css-tricks.com/useful-nth-child-recipies/" , criterionId: 10012, createdAt: new Date(), updatedAt: new Date(), id: 10018 },
      { name: "", url: "https://www.w3schools.com/cssref/css3_pr_align-content.asp" , criterionId: 10013, createdAt: new Date(), updatedAt: new Date(), id: 10019 },
      { name: "CSS attributes", url: "http://www.htmldog.com/references/css/properties/" , criterionId: 10014, createdAt: new Date(), updatedAt: new Date(), id: 10020 },
      { name: "CSS Bootstrap", url: "https://getbootstrap.com/docs/3.3/css/" , criterionId: 10015, createdAt: new Date(), updatedAt: new Date(), id: 10021 },
      { name: "Bootstrap Convention", url: "https://www.ostraining.com/blog/coding/bootstrap-right-way/" , criterionId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10022 },
      { name: "", url: "https://www.webdesignerdepot.com/2013/07/how-to-modify-bootstrap-simply-and-effectively/" , criterionId: 10017, createdAt: new Date(), updatedAt: new Date(), id: 10023 },
      { name: "", url: "https://www.quora.com/How-do-you-make-a-web-page-responsive-without-Bootstrap-using-only-HTML-and-CSS" , criterionId: 10018, createdAt: new Date(), updatedAt: new Date(), id: 10024 },
      { name: "Float & FlexBox", url: "https://www.w3schools.com/css/css3_flexbox.asp" , criterionId: 10019, createdAt: new Date(), updatedAt: new Date(), id: 10025 },
      { name: "CSS with Mobile Responsive", url: "https://www.w3schools.com/css/css_rwd_mediaqueries.asp" , criterionId: 10020, createdAt: new Date(), updatedAt: new Date(), id: 10026 },
      { name: "advanced CSS3", url: "http://www.htmldog.com/guides/css/advanced/" , criterionId: 10021, createdAt: new Date(), updatedAt: new Date(), id: 10027 },
      { name: "", url: "http://www.htmldog.com/guides/css/advanced/transitions/" , criterionId: 10022, createdAt: new Date(), updatedAt: new Date(), id: 10028 },
      { name: "Advanced CSS", url: "https://css-tricks.com/" , criterionId: 10022, createdAt: new Date(), updatedAt: new Date(), id: 10029 },
      { name: "Advanced CSS", url: "https://css-tricks.com/" , criterionId: 10022, createdAt: new Date(), updatedAt: new Date(), id: 10030 },
      { name: "Advanced CSS", url: "https://css-tricks.com/" , criterionId: 10023, createdAt: new Date(), updatedAt: new Date(), id: 10031 },
      { name: "Sass", url: "http://sass-lang.com/" , criterionId: 10023, createdAt: new Date(), updatedAt: new Date(), id: 10032 },
      { name: "Sass", url: "https://www.youtube.com/watch?v=PRJpf-yyWZ4" , criterionId: 10023, createdAt: new Date(), updatedAt: new Date(), id: 10033 },
      { name: "Sass", url: "https://www.youtube.com/watch?v=wz3kElLbEHE" , criterionId: 10023, createdAt: new Date(), updatedAt: new Date(), id: 10034 },
      { name: "jQuery", url: "https://www.w3schools.com/jquery/default.asp", criterionId: 10024, createdAt: new Date(), updatedAt: new Date(), id: 10035 },
      { name: "JavaScript", url: "https://www.w3schools.com/html/html_scripts.asp" , criterionId: 10024, createdAt: new Date(), updatedAt: new Date(), id: 10036 },
      { name: "JavaScript", url: "https://www.codecademy.com/catalog/language/javascript" , criterionId: 10024, createdAt: new Date(), updatedAt: new Date(), id: 10037 },
      { name: "JavaScript", url: "https://www.codecademy.com/catalog/language/javascript" , criterionId: 10024, createdAt: new Date(), updatedAt: new Date(), id: 10038 },

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
