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
  try{
    const project = await Projects.get(req.params.id);
    res.status(200).json(project);
  }
  catch (error) {
    res.status(500).json({error: "Error retrieving data"})
  }
});

module.exports = router;