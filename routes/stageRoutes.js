const express = require('express');
const stageController = require('../controllers/stageController');

const router = express.Router();

router.get('/', stageController.getAllStage);
router.post('/', stageController.createStage);
router.delete('/:id', stageController.deleteStage);

module.exports = router;
