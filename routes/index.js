var express = require('express');
var router = express.Router();
var OAuth = require('oauth');

/* GET home page. */
router.get('/:keyword', function(req, res, next) {


  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'kxjBLzzJEZTvt0t0EY5G5VHnQ',
    'yDi8mSxJyt37vSUHwV2FpoZdtoQXUfuNH5dV3OnAe1MDBvVDNm',
    '1.0A',
    null,
    'HMAC-SHA1'
  );
  oauth.get(
    // 'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.keyword}&src=typd`,
    // 'https://api.twitter.com/1.1/search/tweets.json?q=irwinpratajaya&src=typd',
    '58334030-kZbGbiIiX9XuhyqO5BSHq3juWP06f9i1fXhilHPwv', //test user token
    'DW9Oc5uWdU0xTI2Jq925vxG10EH0Q0gTOM5Ef56mpsC4k', //test user secret
    function (e, data, respond){
      if (e) console.error(e);
      // console.log(require('util').inspect(data))
      res.send(data);
    }
  );
  // res.render('index', { title: 'Express' });

  // https://api.twitter.com/1.1/search/tweets.json?q=jalan%20jalan&src=typd
  // https://api.twitter.com/1.1/search/tweets.json?q=irwinpratajaya&src=typd
});

module.exports = router;
