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

const createTask = async (request, response) => {
    try {
        const createdTask = await taskModels.createTask(request.body);
        response.status(201).json(createdTask);
    } catch (error) {
        response.status(500).json({ message: 'Error creating new task', error: error.message });
    }
};

const postALL = () =>{
    
}

module.exports ={
    getAll
    ,postALL,
    createTask
};