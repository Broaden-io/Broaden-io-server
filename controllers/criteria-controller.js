const db = require('../models');

module.exports = (app) => {

  // Show criterion
  app.get('/criteria/:id', (req, res) => {
    const criterionId = req.params.id
    db.Criterion.findById(criterionId)
    .then((criterion) => {
      console.log("Response from Criteria/Show: ", criterion)
      res.status(200)
      res.json({
        message: "Criteria request successful",
        criterion
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

  //TODO: Code Review  whether the criterionId exists, it does not ever hits catch error
    // UPDATE a Criterion
  app.put('/criteria/:id/update', (req, res) => {
    const criterionId = req.params.id
    const criterion = req.body
    db.Criterion.update(criterion, {
      where: { id: criterionId }
    }).then((response) => {
        res.status(200)
        res.json({
          msg: 'criterion updated successfully!',
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

  // Create a criteria
  // http://localhost:8000/scales/5/criteria/create
  app.post('/scales/:scaleId/criteria/create', (req, res) => {
    const newCriterion = {...req.body, scaleId: req.params.scaleId}
    db.Criterion.create(newCriterion)
    .then((criterion) => {
      console.log("Response from criteria/Create: ", criterion)
      res.status(200)
      res.json({
        msg: 'criterion added successfully!',
        criterion
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

  //TODO: Code Review  whether the criterionId exists, it does not ever hits catch error
  // Delete a Criterion
  app.delete('/criteria/:id', (req, res) => {
    const criterionId = req.params.id
    db.Criterion.destroy({ where: { id: criterionId } })
    .then((response) => {
      console.log("Response from criteria/Delete: ", response)
      res.status(200)
      res.json({
        msg: 'criterion deleted successfully!',
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
