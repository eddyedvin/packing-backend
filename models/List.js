const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A list must have a name'],
  },
  stages: [String],
});

const List = mongoose.model('List', listSchema);

module.exports = List;
