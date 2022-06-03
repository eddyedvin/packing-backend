const List = require('../models/List');
const Todo = require('../models/Todo');
const Stage = require('../models/Stage');

exports.getAllLists = async (req, res) => {
  const lists = await List.find();

  res.status(200).json({
    status: 'success',
    results: lists.length,
    data: lists,
  });
};

exports.getList = async (req, res) => {
  const list = await List.findById(req.params.id);

  const stages = await Stage.find();

  let todos = {};

  // refactor!!!!!

  stages.forEach((stage) => {
    Todo.find({
      listId: req.params.id,
      stageId: stage._id,
    }).then((todosOnStage) => {
      todos[stage.name] = {
        stageName: stage.name,
        stageId: stage._id,
        todos: todosOnStage,
      };
      // refactor!!!!!
      if (Object.keys(todos).length === list.stages.length) {
        res.status(200).json({
          status: 'success',
          data: { list, todos },
        });
      }
    });
  });
};

exports.createList = async (req, res) => {
  const newList = await List.create(req.body);

  res.status(200).json({
    status: 'success',
    data: newList,
  });
};

exports.deleteList = async (req, res) => {
  const list = await List.findByIdAndDelete(req.params.id);

  if (!list) {
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
