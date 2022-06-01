const List = require('../models/List');

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

  res.status(200).json({
    status: 'success',
    results: stages.length,
    data: lists,
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
