require('dotenv').config();

const mysql =  require('mysql');

var db = mysql.createConnection({
    user : 'root',
    password : '',
    host : 'localhost',
    database : 'ordernow'
  });
  
  module.exports = db;