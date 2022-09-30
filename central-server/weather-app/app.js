const request = require("postman-request")

const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3dhZGUxIiwiYSI6ImNram9pNmVyZTJ4azQycW83Z2w4a2I0M2IifQ.nCGXJ196sRojF-AqS-WFmQ"

request({url: geocodeUrl, json: true}, (error, response) => {
   const latitude = response.body.features[0].center[1]
   const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
})

const url = 'http://api.weatherstack.com/current?access_key=6af1aac791b77248f49f1b294ddc883e&query=37.8267,-122.4233'

request({url: url, json: true}, (error, response) => {
   
    console.log("It is currently " 
    + response.body.current.temperature + " degrees outside in "
     + response.body.location.name + ", " 
     +  response.body.location.country)
})

