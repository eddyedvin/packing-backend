const Todo = require('../models/Todo');

exports.getTodoByParent = async (req, res) => {
  const todos = await Todo.find({
    listId: req.query.listId,
    stageId: req.query.stageId,
  });

  res.status(200).json({
    status: 'success',
    results: todos.length,
    data: todos,
  });
};

exports.createTodo = async (req, res) => {
  const todo = await Todo.create(req.body);

  res.status(200).json({
    status: 'success',
    data: todo,
  });
};

exports.deleteList = async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);

  if (!todo) {
    res.status(404).json({
      status: 'failed',
      message: `cannot find stage with ${req.params.id}`,
    });
  }

  res.status(200).json({
    status: 'success',
    data: null,
  });
};
