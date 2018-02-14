const db = require('../models');

module.exports = (app) => {

  // Show Scale
  app.get('/scales/:id', (req, res) => {
    const scaleId = req.params.id
    db.Scales.findById(scaleId)
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
    db.Scales.update(scale, {
      where: { id: scaleId }
    }).then((response) => {
        res.status(200)
        res.json({
          msg: 'scale updated successfully!',
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
    db.Scales.create(newScale)
    .then((scale) => {
      console.log("Response from scale/Create: ", scale)
      res.status(200)
      res.json({
        msg: 'scale added successfully!',
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
  app.delete('/scales/:id/delete', (req, res) => {
    const scaleId = req.params.id
    db.Scales.destroy({ where: { id: scaleId } })
    .then((response) => {
      console.log("Response from scale/Delete: ", response)
      res.status(200)
      res.json({
        msg: 'scale deleted successfully!',
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
