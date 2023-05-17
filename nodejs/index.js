const https = require('https');
const child_process = require('child_process');
let url = "https://www.google.com"

exports.demo_nodejs = function(event, context, callback) {
  child_process.execSync('pwd; ls -al');
  https.get(url, (res) => {
    callback(null, res.statusCode)
  }).on('error', (e) => {
    callback(Error(e))
  })
};