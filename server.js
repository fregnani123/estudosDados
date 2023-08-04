const { error } = require('console');
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({path:'variaveis.env'})

app.get("/",(req,res)=>{
    res.send('oi')
});

try {
    app.listen(process.env.PORT, () => {
        console.log('Servidor rodando');
    });
} catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
    process.exit(1);
}