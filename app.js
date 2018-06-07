var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var playersRouter = require('./routes/players');
var teamsRouter = require('./routes/teams')

var app = express();
//Connect to mongodb
mongoose.connect('mongodb://localhost/statsdb');
mongoose.Promise  = global.Promise;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//setup template engine
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//serve static files
app.use(express.static(path.join(__dirname, 'public')));

//add the router to the middleware handling path
app.use('/', indexRouter);
app.use('/players', playersRouter);
app.use('/teams', teamsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('  env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
