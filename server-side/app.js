let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
let MongoClient = require('mongodb').MongoClient;
let db;
let uri = "mongodb+srv://theJavalinaMan:megam1nd17@cluster0-6lxj5.mongodb.net/test?retryWrites=true";

app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static('public'));
app.use(cors());

app.get('/', function(req,res){
    res.send('ok');
});
app.post('/english-connect-program-sign-up', function(req, res){
    MongoClient.connect(uri,{'useNewUrlParser':true}, function(err, db) {
        if (err) throw err;
        let dbo = db.db("seoulMission");
        dbo.collection("englishConnect").insertOne(req.body, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
});

// MongoClient.connect(uri,{'useNewUrlParser':true}, function(err, client) {
//     db = client.db('seoulMission');
//
//     //post the data
//
//     app.post('/blah', function(req, res) {
//         db.collection('englishConnect').insert(req.body, function(err, result){
//             if (err) return console.log('this is the error: ', err);
//
//             console.log('saved to database');
//             res.redirect('/');
//         });
//     });
//     // perform actions on the collection object
//     client.close();
// });

app.listen(8080);