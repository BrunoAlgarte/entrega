// Importa o módulo express
const express = require('express');
const app = express();

// Define uma rota GET para o endpoint "/"
app.get('/', (req, res) => {
  res.send('Ahoj svet>');
});

// Define a porta do servidor
const PORT = 8083;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
