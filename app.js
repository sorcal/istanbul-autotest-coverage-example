var im = require('istanbul-middleware');
var coverage = require('istanbul-middleware');
var express = require('express');
var path = require('path');
var url = require('url');
var publicDir = path.resolve(__dirname, 'assets');
var app = express();

function matcher(req) {
    var parsed = url.parse(req.url);
    return parsed.pathname && parsed.pathname.match(/\.js$/);
}

im.hookLoader(publicDir);

app.use('/coverage', coverage.createHandler({ resetOnGet: true }));
app.use(coverage.createClientHandler(publicDir, { matcher: matcher }));

app.get('/', function(req,res){
    res.sendFile(path.resolve(publicDir, 'index.html'));
});

app.listen(8888);