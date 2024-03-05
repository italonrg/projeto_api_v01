//aqui será onde ficara as rotas

const express = require('express');//importaao do express;
const taskController = require ('./controllers/taskController');//importaao do taskController

const router = express.Router();//cria um router isso e a instanciacao do router

router.get('/tasks', taskController.getAll);

module.exports = router;//exportaao do router