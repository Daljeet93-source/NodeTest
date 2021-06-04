const express = require('express')
const path = require("path")

const app = express();


app.get('/',(req, res) => {
    // res.send("<h1>Hello World</h1>")
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get('/add',(req,res) => {
    // res.send("Saved succesfully")
    res.sendFile(path.join(__dirname,'add.html'))
})

app.get('/json',(req,res) => {
    res.json({Name:"Aman",Age:12,Marks:[23,65,98,78]})
})

app.listen(5000,() => {
    console.log("Connected")
})