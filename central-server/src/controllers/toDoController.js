const { query } = require("express")
const ToDo = require("../models/toDoModel")

getEveryTodo = async(req, res) => { 
    try{
        const toDos = await ToDo.find({})
        res.send(toDos)
    }
    catch(e){
        res.status(500).send(e)
    }
}

createToDo = async(req, res) => {
   
    const toDo = new ToDo(req.body)
    try { 
        await toDo.save()
        res.status(201).send(toDo)
    }
    catch(e) {
        res.status(500).send(e)
    }
}

module.exports = { 
    getEveryTodo,
    createToDo
}