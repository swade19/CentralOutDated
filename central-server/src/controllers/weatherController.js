const { query } = require("express")
const weather = require("../models/weatherModel")
const request = require("postman-request")

getWeather = async (req, res) => {
    try { 
        const url = 'http://api.weatherstack.com/current?access_key=6af1aac791b77248f49f1b294ddc883e&query=37.8267,-122.4233'
        const weather = await request({url: url, json: true}, (error, response) => {
            console.log("It is currently " 
            + response.body.current.temperature + " degrees outside in "
             + response.body.location.name + ", " 
             +  response.body.location.country)
        })
        res.send(weather)
    }
    catch(e){
        res.status(500).send()
    }
}

module.exports = {
    getWeather
}