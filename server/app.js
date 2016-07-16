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
var session = require('express-session');
var cookieSession = require('cookie-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// TODO: don't need this, correct? since views are front-end angular...or do I need error pages in jade?
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'client')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieSession({ name: 'session', keys: [process.env.SESSION_SECRET] }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
 }));

// TODO: cors will need to be recoded upon deployment, as origin of req will change. make sure req is from a single specified origin, for security's sake
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

// Instagram oAuth
passport.serializeUser(function(user, done) {
  console.log('Serializing user', user);
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log('Deserializing in process');
  knex('users').first().where('id', id).then(function(user) {
    if(user) {
      console.log('Deserialized user', user);
      done(null, user);
    }
    else {
      console.log('Unable to deserialize user');
      done(new Error('User not found'));
    }
  });
});

passport.use(new InstagramStrategy({
  clientID: process.env.INSTAGRAM_CLIENT_ID,
  clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
  callbackURL: '/auth/instagram/callback'
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
        }).catch(function(error) {
          done(error);
        });
      }
      else if(user) {
        done(null, user);
      }
  })
}));

app.get('/auth/instagram',
  passport.authenticate('instagram'));

app.get('/auth/instagram/callback',
  passport.authenticate('instagram', { failureRedirect: '/#/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.use('/api', api);

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
