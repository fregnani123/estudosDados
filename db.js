const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER, 
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}).connect((error)=>{
    if(error)throw error;
    console.log('conectado ao DB')
});
 

module.exports = connection;