const express = require('express');
const listController = require('../controllers/listController');

const router = express.Router();

router.get('/', listController.getAllLists);
router.post('/', listController.createList);
router.get('/:id', listController.getList);
router.delete('/:id', listController.deleteList);

module.exports = router;
