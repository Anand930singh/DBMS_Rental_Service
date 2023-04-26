var mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "20270508",
    database :"dream_home"
  });

  
module.exports=con