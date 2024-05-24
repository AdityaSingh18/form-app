const { Form, FormData } = require('../models');

exports.fillFormData = async (req, res) => {
  const { uniqueId, name, email, phoneNumber, isGraduate } = req.body;
  const formTitle = req.query.form_title;
  
  try {
    // Check if the request body contains all required fields
    const requiredFields = ['uniqueId', 'name', 'email', 'phoneNumber', 'isGraduate'];
    const missingFields = requiredFields.filter(field => !(field in req.body));
    if (missingFields.length > 0) {
      return res.status(400).json({ error: `Missing fields: ${missingFields.join(', ')}` });
    }

    // Check if the form exists
    const form = await Form.findOne({ where: { title: formTitle } });
    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }
    
    // Save form data
    const formData = await FormData.create({
      uniqueId,
      name,
      email,
      phoneNumber,
      isGraduate,
      formTitle,
    });
    res.status(201).json(formData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
