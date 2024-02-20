const taskModels = require('../models/tasksModels');

const getAll = async (request, response) =>{

    const taks = await taskModels.getAll();


return response.status(200).json(tasks)
};

const postALL = () =>{
    
}

module.exports ={
    getAll
    ,postALL
};