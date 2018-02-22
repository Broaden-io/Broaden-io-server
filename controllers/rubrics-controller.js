const db = require('../models');

module.exports = (app) => {

  // Index of all Rubrics
  app.get('/rubrics', (req, res) => {
    db.Rubric.findAll()
    .then((rubrics) => {
      console.log("Response from Rubric/Index: ", rubrics)
      res.json(rubrics)
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json( {
        message: "Error!",
        error: err
      })
    })
  });

  // TODO: Still need to implement a nested retrieval of all child resources
  // Show a Rubric
  app.get('/rubrics/:id', (req, res) => {
    const rubricId = req.params.id
    db.Rubric.findOne({
      id: rubricId,
      include: [
        { model: db.Competency,
          include: [
            { model: db.Scale,
              include: [
                { model: db.Criterion,
                  include: [
                    { model: db.Action }
                  ]
                }
              ]
            }
          ]
        }
      ]
    })
    .then((rubric) => {
      console.log("Response from Rubric/Show: ", rubric)
      res.status(200)
      res.send({
        message: "Rubric request successful",
        rubric: rubric
      }
    )
    // rubric.getCompetencies().then(competencies => {
    //   console.log("Here are the results from rubric.getCompetencies()", competencies.filter((n) => { return n.dataValues }))
    //   const competenciesData = competencies.filter((n) => { return n.dataValues })
    //   competencies.map((competency) => {
    //     return competency.getScales()
    //   })
    //
    // })

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

// UPDATE
app.put('/rubrics/:id/update', (req, res) => {
  const rubricId = req.params.id
  const rubric = req.body
  db.Rubric.update(rubric, {
    where: { id: rubricId }
  }).then((response) => {
    res.status(200)
    res.json({
      msg: 'Rubric updated successfully!',
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

// Create a Rubric
app.post('/users/:userId/rubrics/create', (req, res) => {
  const newRubric = {...req.body, userId: req.params.userId}
  db.Rubric.create(newRubric)
  .then((rubric) => {
    console.log("Response from Rubric/Create: ", rubric)
    res.status(200)
    res.json({
      msg: 'Rubric added successfully!',
      rubric
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

// Delete a Rubric
app.delete('/rubrics/:id/delete', (req, res) => {
  const rubricId = req.params.id
  db.Rubric.destroy({ where: { id: rubricId } })
  .then((response) => {
    console.log("Response from Rubric/Delete: ", response)
    res.status(200)
    res.json({
      msg: 'Rubric deleted successfully!',
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
