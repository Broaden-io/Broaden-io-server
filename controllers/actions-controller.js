const db = require('../models');
var ogs = require('open-graph-scraper')

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
          message: 'action updated successfully!',
        })
      }).catch((err) => {
        console.log('Error in action update:', err)
        res.status(400);
        res.json({
          message: "Error!",
          error: err
        })
      })
    });

  // Create a action
  app.post('/criteria/:criterionId/actions/create', (req, res) => {
    const newAction = req.body

    db.Action.create(newAction)
    .then((action) => {
      console.log("Response from action/Create: ", action)
      res.status(200)
      res.json({
        message: 'action added successfully!',
        action: action.dataValues
      })
    })
    .catch((err) => {
      console.log("There was an error!", err);
      res.status(400);
      res.json({
        message: "Error!",
        error: err
      })
    })
  });

  // Delete a Action
  app.delete('/actions/:id', (req, res) => {
    const actionId = req.params.id
    db.Action.destroy({ where: { id: actionId } })
    .then((response) => {
      console.log("Response from Action/Delete: ", response)
      res.status(200)
      res.json({
        message: 'action deleted successfully!',
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

  // Open Graph Pipe
  app.post('/opengraph', (req, res) => {
    const action = req.body
    var options = {'url': action.url}
    ogs(options, (error, results) => {
      if (error) {
        console.log('Open Graph Error:', results.error) // This is returns true or false. True if there was a error. The error it self is inside the results object.
      } else {
        console.log('Open Graph Call Successful...')
      }
      const newAction = {
        ...action,
        meta: results.success ? results.data : { error: results }
      }
      res.status(200)
      res.json(newAction)
    })
  })
}
