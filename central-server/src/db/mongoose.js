const mongoose = require('mongoose')
require('dotenv').config();

const mongoDB = process.env.DB


mongoose.connect(mongoDB, {useNewUrlParser: true})