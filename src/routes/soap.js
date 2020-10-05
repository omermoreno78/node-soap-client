const express = require('express');
const router = express.Router();

const soapController = require('../controllers/soap')

router.get('/test', soapController.test);

module.exports = router;