var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var childProcess = require('child_process');

const hbs = require("hbs");

// Routes (pick ONE structure — app_server version kept since yours uses it)
var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var travelRouter = require('./app_server/routes/travel');
var apiRouter = require('./app_api/routes/index');

// Database
require('./app_api/models/db');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
//app.use('/users', usersRouter);
//app.use('/travel', travelRouter);
//app.use('/api', apiRouter);

// Error handling (optional but good practice)
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(3000, () => {
  const url = 'http://localhost:3000';
  console.log(`Server running on ${url}`);

  const command = process.platform === 'win32'
    ? `start "" ${url}`
    : process.platform === 'darwin'
      ? `open ${url}`
      : `xdg-open ${url}`;

  childProcess.exec(command, (error) => {
    if (error) {
      console.warn(`Could not open browser automatically: ${error.message}`);
    }
  });
});

module.exports = app;