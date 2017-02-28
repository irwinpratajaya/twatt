var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

// var OAuth = require('oauth');

var app = express();

// var myOauth = new oauth.OAuth(
//   '58334030-kZbGbiIiX9XuhyqO5BSHq3juWP06f9i1fXhilHPwv',
//   'DW9Oc5uWdU0xTI2Jq925vxG10EH0Q0gTOM5Ef56mpsC4k',
//   'kxjBLzzJEZTvt0t0EY5G5VHnQ',
//   'yDi8mSxJyt37vSUHwV2FpoZdtoQXUfuNH5dV3OnAe1MDBvVDNm',
//   '1.0',
//   localhost:3000/twitter/callback,
//   'HMAC-SHA1',
//   null,
//   headers
// )



// var OAuth = require('oauth');
//
// var oauth = new OAuth.OAuth(
//   'https://api.twitter.com/oauth/request_token',
//   'https://api.twitter.com/oauth/access_token',
//   'kxjBLzzJEZTvt0t0EY5G5VHnQ',
//   'yDi8mSxJyt37vSUHwV2FpoZdtoQXUfuNH5dV3OnAe1MDBvVDNm',
//   '1.0A',
//   null,
//   'HMAC-SHA1'
// );
// oauth.get(
//   'https://api.twitter.com/1.1/trends/place.json?id=23424977',
//   '58334030-kZbGbiIiX9XuhyqO5BSHq3juWP06f9i1fXhilHPwv', //test user token
//   'DW9Oc5uWdU0xTI2Jq925vxG10EH0Q0gTOM5Ef56mpsC4k', //test user secret
//   function (e, data, res){
//     if (e) console.error(e);
//     console.log(require('util').inspect(data));
//   }
// );







// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
