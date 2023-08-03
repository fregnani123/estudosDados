const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({path:'variaveis.env'})

app.get("/",(req,res)=>{
    res.send('oi')
});

app.listen(process.env.PORT,()=>{
    console.log('servidor rodando')
});