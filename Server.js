var express = require("express");
var multer = require("multer");
var path = require('path');
var bodyParser = require('body-parser');

const low = require('lowdb');
const lowdbstorage = require('lowdb/file-async');
const db = low('./app/assets/db.json', { storage: lowdbstorage });

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

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.use(express.static(path.join(__dirname, '/')));

app.post('/api/upload', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

//Get all users or filter them bu name parametar
app.get('/getAllUsers/:name?', function (req, res) {
    if (req.params.name != undefined) {
        res.send(db('users').find({ name: req.params.name }));
    } else {
        res.send(db('users').value());
    }
});

//Add new user
app.post('/addUser', function (req, res) {
     db('users').push(req.body)
                .then(post => res.send(post));
});

app.get('/', function (req, res) {
    res.sendFile('/index.html');
});

app.listen(3000, function () {
    console.log("Working on port 3000");
});
