const express = require('express');

const Actions = require('./actionModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const project = await Actions.get();
    res.status(200).json(project);
  }
  catch (error) {
    res.status(500).json({error: "Error retrieving data"})
  }
});


module.exports = router;