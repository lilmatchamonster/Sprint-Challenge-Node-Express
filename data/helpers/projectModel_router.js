const express = require('express');

const Projects = require('./projectModel.js');
const Actions = require('./actionModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const project = await Projects.get();
    res.status(200).json(project);
  }
  catch (error) {
    res.status(500).json({error: "Error retrieving data"})
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Projects.get(req.params.id);
    res.status(200).json(project);
  }
  catch (error) {
    res.status(500).json({error: "Error retrieving data"})
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Projects.update(req.params.id, req.body);
    res.status(200).json(updated);
  }
  catch (error) {
    res.status(500).json({error: "Error updating data"})
  }
});

//Edited project delete function so that all actions assiciated to
//project group are deleted along with the assiciated project.
router.delete('/:id', async (req, res) => {
  try {
    const project = await Projects.get(req.params.id);
    if (project) {
      await Actions.removeByProjectGroup(req.params.id);
      await Projects.remove(req.params.id);
      res.status(200).json({message: "Project has been removed"})
    }
    else {
      res.status(404).json({message: "Error removing data with ID"})
    }
  }
  catch (error) {
    res.status(500).json({error: "Error removing data"})
  }
});

router.post("/", async (req, res) => {
  try {
    const project = await Projects.insert(req.body);
    res.status(201).json(project);
  }
  catch (error) {
   res.status(500).json({error: "Error adding data"})
 }
});

//Function for adding Action to specific project
//Was having trouble associating actions to projects instead of
//just creating action that is not associated to a project.
router.post("/:id/actions", async (req, res) => {
  try {
    const project = await Projects.get(req.params.id);
    const newAction = { ...req.body, project_id: req.params.id };
    const action = await Actions.insert(newAction);
    res.status(201).json(action);
  } 
  catch (error) {
    res.status(500).json({
      message: "Error adding the action, project ID may not exist"
    });
  }
 });

module.exports = router;