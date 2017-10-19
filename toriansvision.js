var files = require('fs');
var https = require('https');

var tVisUrl = "https://scontent-sjc2-1.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/19379345_475076986170438_2788996421645238272_n.jpg";
var tFile = files.createWriteStream(__dirname + "/tvis-logo.jpg");

var request = https.get(tVisUrl,function(response){
    response.pipe(tFile);
});