const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router.post('/', todoController.createTodo);
router.get('/', todoController.getTodoByParent);
router.delete('/:id', todoController.deleteList);

module.exports = router;
