const express = require('express')
const router = new express.Router()

const weatherController = require("../controllers/weatherController")

router.get("/weather", weatherController.getWeather);

module.exports = router