const router = require('express').Router();

module.exports = router
  .use('/authors', require('./author.routes'))
  .use('/books', require('./book.routes'));
