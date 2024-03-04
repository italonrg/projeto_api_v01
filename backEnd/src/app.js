const express = require ('express');// esse aqquivo e literalmente meu servidor;
const router = require ('./router');
const app = express();

app.use(router);// isso e para toda requesta que chegar no app vai ser usado o router

app.use(express.json());//isso e para dizer para o express que vai aceitar json

module.exports = app;// isso aqui e para exportar o app