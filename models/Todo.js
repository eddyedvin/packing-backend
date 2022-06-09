const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A todo must have a name'],
  },
  stageId: {
    type: String,
    required: [true, 'a todo must have a parent'],
  },
  listId: {
    type: String,
    required: [true, 'a todo must have a parent'],
  },
  status: {
    type: String,
    enum: {
      values: ['maybe', 'shopping', 'ready'],
      message: 'only easy medium diffucult',
    },
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
