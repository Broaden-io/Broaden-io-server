
module.exports = function(app) {
  app.get('/', function(req, res) {
    console.log('GET index');
    res.send('index')
  });
}
