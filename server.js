const express = require('express');
const app = express();

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(req, res) {
  console.log("listening!");
});
