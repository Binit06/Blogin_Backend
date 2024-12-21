const express = require('express');
const aiController = require('../controllers/aiController');

const router = express.Router();

router.post('/generate', aiController.createArticleFromTitle);
router.post('/summarise', aiController.summariseArticleFromBody);

module.exports = router;

