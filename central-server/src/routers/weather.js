const express = require('express')
const router = new express.Router()

const weatherController = require("../controllers/weatherController")

router.get("/weather", weatherController.getWeather);
router.get('/location', weatherController.getLocation)
router.get('', weatherController.getGreeting)

module.exports = router