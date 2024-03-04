const connection = require ('./conection')
const getAll = async () => {
    // isso aqui retorna todas as tarefas do bancode dados
const tasks  = await connection.execute('SELECT * FROM tasks');//execute simplismente executa um comando no banco de dados;
return tasks[0];
    
};

const createTask = async (task)=>{
    const {titulo , status} = task;

    //criando a data

    const dataUTC =new Date(Date.now()).toUTCString();// isso retorna a data autal certinha...

    //criando o retorono da tarefa do bando de dados;
    // no caso se cria uma variavel que vai ter um consulta sql dentro dele;
    const query = 'insert into tasks (titulo, status, created_at) values (?, ?, ?)';
    const [createTask] = await connection.execute(
        query,[titulo, status, dataUTC]
        
    );
    return createTask;

};

module.exports = {
    getAll,/// aquie tem que colocar entre parentesis porque vão chegar varias funçoes
   createTask,   
};