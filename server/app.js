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

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// TODO: cors will need to be recoded upon deployment, as origin of req will change. make sure req is from a single specified origin, for security's sake
app.use(cors());
app.use(passport.initialize());
app.use('/api', api);

// TODO: serialize users if this doesn't work??

passport.use(new InstagramStrategy({
  insta_id: INSTAGRAM_KEY,
  clientSecret: INSTAGRAM_SECRET,
  callbackURL: 'http:127.0.0.1:3000/auth/instagram/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    // mongoose but knex call instead: users where insta_id = profile.id
    // select 1st from users db to match this instagramId. if they don't exist, create them. if they do, send no error and the user info.
    knex('users').first().where(insta_id == users.insta_id).then(function(user) {
      if(!user) {
        knex('users').insert({
          // TODO: will I need to insert at index 0? does it matter?
          insta_id: insta_id
        }, '*').then(function(user) {
          done(null, user[0]);
        });
        // TODO: redirect to profile edit page
      }
      else if(user) {
        // TODO: redirect to profile edit page iff bio and username exist (if not, redirect to profile edit page)
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
