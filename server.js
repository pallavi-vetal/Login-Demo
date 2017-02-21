var express = require('express');
var morgan = require('morgan');
var formidable = require("formidable");
var path = require('path');
var app = express();
var util = require('util');
app.use(morgan('combined'));
var mysql = require("mysql");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'db1'
});


connection.connect(function(err){
  if(err){
    console.log(err);
    return;
  }
  else{
  console.log('Connection established');}
});

app.use(express.static(__dirname + '/ui'));
var list = [];
app.get('/submit',function(req,res){
    
               
               if(req.query.pwd!=req.query.pwd2){
                
                res.send("password do not match.Go back and reenter")}
                else{
 connection.query("INSERT INTO users (fname,lname,email,pwd,username)values('"+req.query.fname+"','"+req.query.lname+"','"+req.query.email+"','"+req.query.pwd+"','"+req.query.username+"') ",function(err) {
       


         if(err){
        return res.send(err);
    } else{
      res.send("success");
       
    }   

    });
}

 

});
app.get('/', function (req, res) {
  res.render(path.join(__dirname, 'ui', 'index'));
});

app.get('/ui/main.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.css'));
});
app.get('/ui/main1.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main1.css'));
});

app.get('/ui/images/clouds.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'clouds'));
});

app.get('/ui/images/balloon-2.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'balloon-2.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/require.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'require.js'));
});
app.get('/cancel1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cancel.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});