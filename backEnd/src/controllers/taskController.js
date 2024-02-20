const taskModels = require('../models/tasksModels');

const getAll = async (request, response) => {
    let tasks;
    try {
        tasks = await taskModels.getAll();
    } catch (error) {
        return response.status(500).json({ message: 'Error fetching tasks' });
    }

    return response.status(200).json(tasks)
};



const postALL = () =>{
    
}

module.exports ={
    getAll
    ,postALL
};