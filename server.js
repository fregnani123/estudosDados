const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({path:'variaveis.env'})

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'login.html')
    )
});

try {
    app.listen(process.env.PORT, () => {
        console.log('Servidor rodando');
    });
} catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
    process.exit(1);
}

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