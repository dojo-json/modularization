const Author = require('mongoose').model('Author');

module.exports = {
  index(request, response) {
    Author.find({})
    .then(authors => {
      console.log(authors);
      response.render('authors/index', { authors });
    })
    .catch(console.log);
  },
  show(request, response) {
    Author.findById(request.params.id)
    .populate('books')
    .then(author => {
      console.log(author);

      response.render('authors/show', { author })
    })
    .catch(console.log);
  },
  create(request, response) {
    console.log(request.body);
    const author = new Author(request.body);

    // additional processing

    author.save()
      .then(author => {
        console.log(author);

        response.redirect('/authors');
      })
      .catch(error => {
        // handle error
      });
  },
  update(request, response) {
    Author.findByIdAndUpdate(request.params.id, request.body)
    .then(() => {
      response.redirect('/authors');
    })
    .catch(console.log);
  },
  edit(request, response) {
    Author.findById(request.params.id)
    .populate('books')
    .then(author => {
      console.log(author);

      response.render('authors/edit', { author })
    })
    .catch(console.log);
  },
  new(request, response) {
    response.render('authors/new');
  },
  destroy(request, response) {
    Author.findByIdAndRemove(request.params.id)
    .then(author => response.redirect('/authors/index'))
    .catch(console.log);
  },
};
