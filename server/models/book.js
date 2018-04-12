const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },

  year: Number,
  pages: Number,

  genre: String,
  publisher: String,

  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  }
});


module.exports = mongoose.model('Book', bookSchema);
