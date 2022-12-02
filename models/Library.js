const mongoose = require('../db/connection')

const librarySchema = new mongoose.Schema (
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        description: String
    }
)

module.exports=mongoose.model('Library', librarySchema)