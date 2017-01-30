var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var _ = require('underscore');
app.use(bodyParser.json());
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "myschema"
});
var nextId;
con.connect(function(err){
	if(err){
		console.log("error connecting to DB");
		return;
	}
	console.log("Connection Established");
});
con.query("SELECT * FROM table1", function(err,rows){
	if(err) throw err;

	console.log("Data received from DB\n");
	console.log(rows);
	nextId = rows.length;
	console.log("nextId",nextId);
});
var PORT = process.env.PORT || 3000;

app.get('/about',function(req,res){
    res.json({msg:"success"});
});

app.get('/newDraft',function(req,res){
	con.query("SELECT * FROM table1", function(err,rows){
	if(err) throw err;

	console.log(rows.length);
	res.json(rows);
});
});

app.post('/newDraft', function(req, res){
    var body = req.body;
    console.log("body here..."+body);
    
    body = _.pick(body, 'nameOnCard', 'hostName', 'venue');
    nextId++;
    body.id = nextId;
    console.log(body.id + " " + body.nameOnCard + " " + body.hostName + " " + body.venue);

    //var employee = { name: 'Winnie', location: 'Australia' };
	con.query('INSERT INTO table1 SET ?', body, function(err,res){
	  if(err) throw err;

	  console.log('Row inserted successfully');
	})

    res.json(body);
});

app.use(express.static(__dirname));

app.listen(PORT, function(){
    console.log("express server started at port " + PORT);
});