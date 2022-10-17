const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const toDoSchema = new Schema ({
    Id: {
        type: Number
    },
    Item: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Todo', toDoSchema)