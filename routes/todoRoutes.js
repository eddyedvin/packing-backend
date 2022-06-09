const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router.post('/', todoController.createTodo);
router.get('/', todoController.getTodoByParent);
router.patch('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
