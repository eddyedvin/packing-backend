const mongoose = require('mongoose');

const stageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Stage must have a name'],
  },
  todos: [String],
});

const Stage = mongoose.model('Stage', stageSchema);

module.exports = Stage;
