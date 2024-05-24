const { v4: uuidv4 } = require('uuid');
const Form = require('../models/form');

exports.createForm = async (req, res) => {
  const { title } = req.body;
  try {
    const form = await Form.create({ uniqueId: uuidv4(), title });
    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
