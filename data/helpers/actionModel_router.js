const express = require('express');

const Actions = require('./actionModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const action = await Actions.get();
    res.status(200).json(action);
  }
  catch (error) {
    res.status(500).json({error: "Error retrieving data"})
  }
});

router.get('/:id', async (req, res) => {
  try{
    const action = await Actions.get(req.params.id);
    res.status(200).json(action);
  }
  catch (error) {
    res.status(500).json({error: "Error retrieving data"})
  }
});

module.exports = router;