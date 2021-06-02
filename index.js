const express = require('express')

const app = express();


app.get('/',(req, res) => {
    res.send("Hello World")
})

app.post('/add',(req,res) => {
    res.send("Saved succesfully")
})

app.listen(5000,() => {
    console.log("Connected")
})