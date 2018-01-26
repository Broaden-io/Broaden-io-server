
module.exports = function(app) {
  app.get('/rubrics', function(req, res) {
    res.send('sending all rubrics');
  });

  app.get('/rubrics/:id', function(req, res) {
    res.send('getting rubric by id');
  });

  app.post('/rubrics/new', function(req, res) {
    res.send('creating new rubric');
  })
}
