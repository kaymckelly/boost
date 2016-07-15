var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var InstagramStrategy = require('passport-instagram').Strategy;
var api = require('./api');
var dotenv = require('dotenv').config();
var knex = require('./knex.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// TODO: don't need this, correct? since views are front-end angular...or do I need error pages in jade?
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));

// TODO: cors will need to be recoded upon deployment, as origin of req will change. make sure req is from a single specified origin, for security's sake
app.use(cors());
app.use(passport.initialize());
app.use('/api', api);

// Instagram oAuth
app.get('/auth/instagram',
  passport.authenticate('instagram'));

app.get('/auth/instagram/callback',
  passport.authenticate('instagram', { failureRedirect: '/#/login' }),
  function(req, res) {
    res.redirect('/');
  });

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new InstagramStrategy({
  clientID: process.env.INSTAGRAM_CLIENT_ID,
  clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
  callbackURL: 'http://127.0.0.1:3000/auth/instagram/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    knex('users').first().where('insta_id', profile.username).then(function(user) {
      if(!user) {
        knex('users').insert({
          insta_id: profile.username,
          username: profile.displayName,
          bio: profile.bio
        }, '*').then(function(user) {
          done(null, user[0]);
        });
      }
      else if(user) {
        done(null, user[0]);
      }
      else {
        done(error);
      }
  })
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
