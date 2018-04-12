const parser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

require('./server/config/database');

app.use(require('./server/config/routes'));

app.listen(port, () => console.log(`listening on port ${ port }`));
