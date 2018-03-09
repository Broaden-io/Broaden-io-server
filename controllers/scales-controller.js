const db = require('../models');

module.exports = (app) => {

  // Show Scale
  app.get('/scales/:id', (req, res) => {
    const scaleId = req.params.id
    db.Scale.findById(scaleId)
    .then((scale) => {
      console.log("Response from scale/Show: ", scale)
      res.status(200)
      res.json({
        message: "scale request successful",
        scale
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json({
        message: "Error!",
        error: err
      })
    })
  });

  //TODO: Code Review  whether the scaleId exists, it does not ever hits catch error
    // UPDATE a scale
  app.put('/scales/:id/update', (req, res) => {
    const scaleId = req.params.id
    const scale = req.body
    db.Scale.update(scale, {
      where: { id: scaleId }
    }).then((response) => {
        res.status(200)
        res.json({
          message: 'scale updated successfully!',
        })
      }).catch((err) => {
        console.log(err);
        res.status(400);
        res.json({
          message: "Error!",
          error: err
        })
      })
    });

  // Create a scale
  app.post('/competencies/:competencyId/scales/create', (req, res) => {
    const newScale = {...req.body, competencyId: req.params.competencyId}
    db.Scale.create(newScale)
    .then((scale) => {
      console.log("Response from scale/Create: ", scale)
      res.status(200)
      res.json({
        message: 'scale added successfully!',
        scale
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json({
        message: "Error!",
        error: err
      })
    })
  });

  //TODO: Code Review  whether the scaleId exists, it does not ever hits catch error
  // Delete a scale
  app.delete('/scales/:id', (req, res) => {
    const scaleId = req.params.id
    db.Scale.destroy({ where: { id: scaleId } })
    .then((response) => {
      console.log("Response from scale/Delete: ", response)
      res.status(200)
      res.json({
        message: 'scale deleted successfully!',
        qty: response
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json({
        message: "Error!",
        error: err
      })
    })
  });
}
