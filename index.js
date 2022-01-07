const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded());
app.use(express.static("./assets"));

app.get('/', require("./routes"))

app.listen(port, (err) =>{
    if(err){
        console.log(`Error while running server: ${err}` );
        return;
    }
    console.log(`Server is up and running on Port: ${port}`);
});