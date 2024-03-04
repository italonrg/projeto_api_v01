//aqui será onde ficara as rotas

const express = require('express');//importaao do express;
const taskController = require ('./controllers/taskController');//importaao do taskController
//const tasksMiddwares = require ('./middlewares/tasksMiddwares');//importaao do tasksMiddwares

const router = express.Router();//cria um router isso e a instanciacao do router

router.get('/tasks', taskController.getAll);

router.post('/tasks',taskController.createTask);
//router.post('/tasks',taskMidlewares.validateBody, taskController.createTask);


module.exports = router;//exportaao do router