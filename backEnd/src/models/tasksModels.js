const connection = require ('./conection')
const getAll = async () => {
    // isso aqui retorna todas as tarefas do bancode dados
const tasks  = await connection.execute('SELECT * FROM tasks');//execute simplismente executa um comando no banco de dados;
return tasks[0];
    
};

const createTask = async (task)=>{
    const {titulo, status} = task;

    //criando o retorono da tarefa do bando de dados;
    // no caso se cria uma variavel que vai ter um consulta sql dentro dele;
    //const query = 'insert into tasks (titulo, status, created_at) values (?, ?, ?)'pode ser feito assim;
    const createTask = await connection.execute(
        'INSERT INTO tasks (titulo,satus, created_at) VALUES (?, ?, ?)'[1,2,3],
    );

};

module.exports = {
    getAll,/// aquie tem que colocar entre parentesis porque vão chegar varias funçoes
   createTask,   
};