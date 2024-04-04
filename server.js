var express = require('express'); 
var bodyParser = require("body-parser"); 
var mysql = require('mysql'); 
var app = express(); 
// app.use(cors());   
app.use(express.static('public')); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })) 
// json sample 
// const books = JSON.stringify([ 
// { title: "The Alchemist", author: "Paulo Coelho", year: 1988 }, 
// { title: "The Prophet", author: "Kahlil Gibran", year: 1923 } 
// ]); 
const smarthome = JSON.stringify([ 
{ name: "Lights", image: "1.jpg"}, 
{ name: "Fan", image: "2.jpg"}, 
{ name: "TV", image: "3.jpg"}, 
]); 
//RESTFull API 
//app.get('/smarthome', function (req, res) { 
//res.send(books); 
//}) 
app.get('/smarthome', function (req, res) { 
res.send(smarthome); 
}) 
//server 
var server = app.listen(8888, function () { 
var host = server.address().address 
var port = server.address().port 
console.log("Example app listening at http://%s:%s", host, port) 
}) 