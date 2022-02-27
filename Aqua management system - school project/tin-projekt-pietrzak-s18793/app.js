var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const employeeRouter = require('./routes/employeeRoute');
const clientRouter = require('./routes/clientRoute');
const serviceRouter = require('./routes/serviceRoute');

//req xxApi
const empApiRouter = require('./routes/api/EmployeeApiRoute');
const cltApiRouter = require('./routes/api/ClientApiRoute');
const serApiRouter = require('./routes/api/ServiceApiRoute');

const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
    .catch(err => {
        console.log(err);
    });

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//

app.use('/', indexRouter);
app.use('/employees', employeeRouter);
app.use('/clients', clientRouter);
app.use('/services', serviceRouter);
//api router
app.use('/api/employees', empApiRouter);
app.use('/api/clients', cltApiRouter);
app.use('/api/services', serApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
  console.log(err);
});

module.exports = app;
