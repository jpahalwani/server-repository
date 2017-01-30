var express = require('express');
var app = express();
//var mysql = require('mysql');
//var bodyParser = require('body-parser');
//var _ = require('underscore');
// var con = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "root",
// 	database: "myschema"
// });
// con.connect(function(err){
// 	if(err){
// 		console.log("error connecting to DB");
// 		return;
// 	}
// 	console.log("Connection Established");
// });
// con.query("SELECT * FROM table1", function(err,rows){
// 	if(err) throw err;

// 	console.log("Data received from DB\n");
// 	console.log(rows);
// 	console.log(rows[0].nameOnCard);
// })
var PORT = process.env.PORT || 3000;

app.get('/about',function(req,res){
    res.json({msg:"success"});
});

// app.post('/newDraft', function(req, res){
//     var body = req.body;
    
//     body = _.pick(body, 'id', 'nameOnCard', 'hostName', 'venue');
        
//     console.log(body.id + " " + body.nameOnCard + " " + body.hostName + " " + body.venue);

//     res.json(body);
// });

//app.use(express.static(__dirname));

app.listen(PORT, function(){
    console.log("express server started at port " + PORT);
});