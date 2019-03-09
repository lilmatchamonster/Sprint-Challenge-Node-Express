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
  try {
    const action = await Actions.get(req.params.id);
    res.status(200).json(action);
  }
  catch (error) {
    res.status(500).json({error: "Error retrieving data"})
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Actions.update(req.params.id, req.body);
    res.status(200).json(updated);
  }
  catch (error) {
    res.status(500).json({error: "Error updating data"})
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const action = await Actions.remove(req.params.id);
    res.status(200).json({message: "Action has been removed"})
  }
  catch (error) {
    res.status(500).json({error: "Error removing data"})
  }
});

module.exports = router;