'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var load = require('express-load');
var session = require('express-session');
var mongoose = require('mongoose');


//var autenticator = require('./middleware/autenticator');

//load('middleware', {verbose : true});

global.db = mongoose.connect("mongodb://localhost/nbotsocial");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'nbotsocial',
    resave: true,
    saveUninitialized: true
    }
));
//app.use(autenticator);
app.use(express.static(path.join(__dirname, 'public')));

load('models', {verbose : true})
    .then('controllers')
    .then('routes')
    .into(app);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
