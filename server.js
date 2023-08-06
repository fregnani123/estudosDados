const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
require('dotenv').config({ path: 'variaveis.env' });

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'login.html'));
});

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao DB:', error);
        process.exit(1);
    }
    console.log('Conectado ao DB');
});

function buscarTodos() {
    return new Promise((aceito, rejeitado) => {
        db.query('SELECT * FROM dadosPessoais', (error, results) => {
            if (error) {
                rejeitado(error);
                return;
            }
            aceito(results);
        });
    });
}

app.get('/api', async (req, res) => {
    try {
        const dados = await buscarTodos();

        let json = { error: '', result: [] };

        for (let i in dados) {
            json.result.push({
                pessoa: dados[i].nome,
                idade: dados[i].idade
            });
        }

        res.json(json);
    } catch (error) {
        console.error('Erro ao buscar dados pessoais:', error);
        res.status(500).json({ error: 'Erro ao buscar dados pessoais' });
    }
});

app.listen(process.env.PORT, () => {
    console.log('Servidor rodando');
});
