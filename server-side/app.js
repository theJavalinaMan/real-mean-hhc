var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app = express();
var MongoClient = require('mongodb').MongoClient;



app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static('public'));
app.use(cors());

var uri = "mongodb://kay:myRealPassword@mycluster0-shard-00-00.mongodb.net:27017,mycluster0-shard-00-01.mongodb.net:27017,mycluster0-shard-00-02.mongodb.net:27017/admin?ssl=true&replicaSet=Mycluster0-shard-0&authSource=admin";
MongoClient.connect(uri, function(err, db) {
    db.close();
});

app.get('/', function(req,res){
    res.send('ok');
});
app.post('/blah', function(req, res, next) {
    var cope = req.body;
    console.log('request received:', req.body);
    //res.send('received the data.');
});
app.listen(8080);

