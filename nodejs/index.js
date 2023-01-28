const https = require('https');
let url = "https://www.google.com"

exports.demo_nodejs = function(event, context, callback) {
  https.get(url, (res) => {
    callback(null, res.statusCode)
  }).on('error', (e) => {
    callback(Error(e))
  })
};