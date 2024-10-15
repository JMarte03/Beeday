const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
}, { collection: 'tasks' });  // Explicitly specify the collection name

module.exports = mongoose.model('Todo', TodoSchema);
