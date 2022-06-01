const Stage = require('../models/Stage');

exports.getAllStage = async (req, res) => {
  const stages = await Stage.find();

  res.status(200).json({
    status: 'success',
    results: stages.length,
    data: stages,
  });
};

exports.createStage = async (req, res) => {
  const newStage = await Stage.create(req.body);

  res.status(200).json({
    status: 'success',
    data: newStage,
  });
};

exports.deleteStage = async (req, res) => {
  const stage = await Stage.findByIdAndDelete(req.params.id);

  if (!stage) {
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
