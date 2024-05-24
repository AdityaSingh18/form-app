const express = require('express');
const formController = require('../controllers/formController');
const formDataController = require('../controllers/formDataController');

const router = express.Router();

router.post('/form', formController.createForm);
router.post('/fill_data', formDataController.fillFormData);
router.get('/fill_data', formDataController.getAllFormData);

module.exports = router;
