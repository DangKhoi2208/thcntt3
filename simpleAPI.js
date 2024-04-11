var express = require('express'); 
var bodyParser = require("body-parser"); 
var mysql = require('mysql2'); 
const cors = require('cors'); 
var app = express(); 
app.use(cors()); 
app.use(express.static('public')); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })) 
// step 1: rong workbench mở cửa sổ sql và chạy lệnh 
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password'; 
//step 2:  
var con = mysql.createConnection({ 
    host: "localhost", 
    port: "3306", 
    user: "root", 
    password: "123456", 
    insecureAuth : true, 
    database: "homeworklab02" 
  }); 
//step 1 
con.connect(function(err) { 
    if (err) throw err; 
    console.log("Connected!!!") 
    var sql = "SELECT * FROM homeworklab02.smarthome"; 
    con.query(sql, function(err, results) { 
        if (err) throw err; 
        console.log(results); 
  }) 
 
}); 
//RESTFull API 
 app.get('/smarthome', function (req, res) { 
    var sql = "SELECT * FROM homeworklab02.smarthome"; 
    con.query(sql, function(err, results) { 
      if (err) throw err; 
      res.send(results); 
    }); 
    
 
 }) 
var server = app.listen(8888, function () { 
   var host = server.address().address 
   var port = server.address().port 
    
   console.log("Example app listening at http://%s:%s", host, port) 
})

app.post('/addSmartHome', function (req, res) {
    const homeworklab02 = req.body;

    if (!homeworklab02|| Object.keys(homeworklab02).length === 0) {
        return res.status(400).send("Invalid data. Please provide data for the smartHome.");
    }

    const sql = "INSERT INTO homeworklab02.smarthome SET ?";
    
    con.query(sql, homeworklab02, function(err, result) {
        if (err) {
            console.error("Error adding smartHome:", err);
            return res.status(500).send("Error adding farm to the database.");
        }
        
        console.log("smartHome added successfully:", result);
        res.status(200).send("smartHome added successfully.");
    });
});