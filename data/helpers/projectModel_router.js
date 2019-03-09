const express = require('express');

const Projects = require('./projectModel.js');

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

router.delete('/:id', async (req, res) => {
  try {
    const project = await Projects.remove(req.params.id);
    res.status(200).json({message: "Project has been removed"})
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

module.exports = router;