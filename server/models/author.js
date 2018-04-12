const mongoose = require('mongoose');
const { Schema } = mongoose;

const authorSchema = new Schema({
  name: String,
  age: Number,
  isAlive: {
    type: Boolean,
    default: true
  },

  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
});


module.exports = mongoose.model('Author', authorSchema);
