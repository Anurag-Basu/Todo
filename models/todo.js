const mongoose = require("mongoose");

// creating a Todo Schema in db
const todoSchema =new mongoose.Schema({
        task:{
            type: String,
            required : true
        },
        category:{
            type: String,
            required: true
        },
        dueDate: {
            type: Date,
            default: Date.now,
            required: true
        }
    });

    const Todos = mongoose.model("todos", todoSchema);

    module.exports = Todos;