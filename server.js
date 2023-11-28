// importar pacotes do projeto
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

// variavél que armazena a pasta com o css
let staticPath = path.join(__dirname, 'public');

// inicializar o express
const app = express();

// chamo o static, a estilização
app.use(express.static(staticPath))

// rota
app.get('/', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

// defini a rota da aplicação
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});0