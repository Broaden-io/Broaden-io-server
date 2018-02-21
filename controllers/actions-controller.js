const db = require('../models');

module.exports = (app) => {

  // Show action
  app.get('/actions/:id', (req, res) => {
    const actionId = req.params.id
    db.Action.findById(actionId)
    .then((action) => {
      console.log("Response from action/Show: ", action)
      res.status(200)
      res.json({
        message: "action request successful",
        action
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

    // UPDATE a action
  app.put('/actions/:id/update', (req, res) => {
    const actionId = req.params.id
    const action = req.body
    db.Action.update(action, {
      where: { id: actionId }
    }).then((response) => {
        res.status(200)
        res.json({
          msg: 'action updated successfully!',
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

  // Create a action
  app.post('/criteria/:criterionId/actions/create', (req, res) => {
    const newAction = {...req.body, criterionId: req.params.criterionId}
    db.Action.create(newAction)
    .then((action) => {
      console.log("Response from action/Create: ", action)
      res.status(200)
      res.json({
        msg: 'action added successfully!',
        action
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

  // Delete a Action
  app.delete('/actions/:id/delete', (req, res) => {
    const actionId = req.params.id
    db.Action.destroy({ where: { id: actionId } })
    .then((response) => {
      console.log("Response from Action/Delete: ", response)
      res.status(200)
      res.json({
        msg: 'action deleted successfully!',
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
