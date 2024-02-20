const connection = require ('./conection')
const getAll = async () => {
    // isso aqui retorna todas as tarefas do bancode dados
const tasks  = await connection.execute('SELECT * FROM tasks');//execute simplismente executa um comando no banco de dados;
return tasks;
    
}

module.exports = {
    getAll/// aquie tem que colocar entre parentesis porque vão chegar varias funçoes
};