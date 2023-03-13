const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    id: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)
