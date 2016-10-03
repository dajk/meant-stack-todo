"use strict";
var express = require('express');
var path = require('path');
var app = express();
var PORT = 1337;
var messages = [
    { title: 'yes', isDone: true },
    { title: 'no', isDone: false },
    { title: 'maybe', isDone: '?' },
];
app.use('/', express.static(path.join(__dirname, '../client')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/api/messages', function (req, res) { return res.json(messages); });
app.listen(PORT, function () {
    console.log('listening on port: ' + PORT);
});
//# sourceMappingURL=app.js.map