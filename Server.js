var express = require("express");
var multer = require('multer');
var app = express();

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './app/assets/images');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
});

var upload = multer({ storage: storage }).single('userPhoto');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.post('/api/upload', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

app.listen(3000, function () {
    console.log("Working on port 3000");
});
