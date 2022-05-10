const express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
dotenv.config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/public')))

//pages
app.get('/', (req, res) => {
    res.render('index')
})


app.listen(3000, async () => {
console.log("ok")
})
