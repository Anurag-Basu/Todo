const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/todos_db');

const db = mongoose.connection;
console.log('db')
db.on('err', console.error.bind(`error connecting to db`));

db.once('open', () =>{
    console.log("sucessfully connected to the database");
});