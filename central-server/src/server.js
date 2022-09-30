const express = require('express'),
    app = express(),
    port = process.env.PORT || 2000,    
    cors = require("cors");

app.use(cors()); 
app.use(express.json())

const weatherRouter = require("../src/routers/weather")

app.use(weatherRouter)
app.listen(port, () => console.log("Server is up on "+ port));