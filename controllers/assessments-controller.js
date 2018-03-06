const db = require('../models');

module.exports = (app) => {

  // Create a Assessment
  app.post('/users/:userId/rubrics/:rubricId/assessments/create', (req, res) => {
    const params = { userId: req.params.userId, rubricId: req.params.rubricId }
    db.Assessment.findOne({ where: params }).then(assessment => {
      if (!!project) {
        // Return the assessment

      } else {
        // Create the assessment and return it...
      }
    })

    db.Assessment.findOrCreate({ where: params, defaults: {...req.body, ...params} })
    .spread((assessment, created) => {

      console.log("New Assessment Created? ", created)
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json({
        message: "Error!",
        error: err
      })
    })

    // db.Assessment.findOrCreate({ where: params, defaults: req.body })
    // .all().then((assessment, created) => {
    //   callback && callback(null, assessment, created);
    // },
    // (error) => {
    //   callback && callback(error);
    // });
    //
    // const callback = (error, result, created) => {
    //   if (error) {
    //     console.log("Error in Assessment Create Route:", error);
    //     res.send(400, { message: "Error!", error })
    //   } else {
    //     console.log("New Assessment Created? ", created)
    //     res.send({
    //       message: (created ? "Assessment was successfully created" : "Assessment was successfully found"),
    //       created,
    //       result
    //     })
    //   }
    // };
  });


  // Show Assessment
  app.get('/assessments/:id', (req, res) => {
    const assessmentId = req.params.id
    db.Assessment.findById(assessmentId)
    .then((assessment) => {
      console.log("Response from Assessment/Show: ", assessment)
      if (assessment === null) {
        res.status(400);
        res.json({
          message: "Asssement not found!",
          assessmentId
        })
      } else {
        res.status(200)
        res.json({
          message: "Assessment request successful",
          assessment
        })
      }
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

  // UPDATE a Assessment
  app.put('/assessments/:id', (req, res) => {
    const assessmentId = req.params.id
    const assessment = req.body
    db.Assessment.update(assessment, {
      where: { id: assessmentId }
    }).then((response) => {
      res.status(200)
      res.json({
        msg: 'assessment updated successfully!',
        assessmentId,
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

  // Delete a Assessment
  app.delete('/assessments/:id', (req, res) => {
    const assessmentId = req.params.id
    db.Assessment.destroy({ where: { id: assessmentId } })
    .then((response) => {
      console.log("Response from Assessment/Delete: ", response)
      res.status(200)
      res.json({
        msg: 'Assessment deleted successfully!',
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
