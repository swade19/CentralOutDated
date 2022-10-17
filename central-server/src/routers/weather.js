const express = require('express')
const router = new express.Router()

const weatherController = require("../controllers/weatherController")
const todoController = require("../controllers/toDoController")
router.get("/weather", weatherController.getWeather);
router.get('/location', weatherController.getLocation)
router.get('', weatherController.getGreeting)

router.get("/getTodo", todoController.getEveryTodo)
router.post("/postTodo", todoController.createToDo)

module.exports = router