const express = require('express')
const axios = require('axios')
const dotenv = require('dotenv')
const database = require('./mongo')
const jsonSample = require('./testjson.js')

const data = jsonSample.data;

data.forEach((item) => {
    console.log(item)
})

// const { MongoClient } = require('mongodb')

dotenv.config();
const app = express()
const port = process.env.PORT || 3001;

// database.connectToDB();

// Serving static files
app.use(express.static('public'));
// app.use(express.json())
// app.use(express.urlencoded())

app.set("view engine", "pug");
app.set("views", "./views");

app.get('/', (req, res) => {
    // res.send(`Hello from the nodejs server at Port ${port}`)
    res.render('index')
})

app.get('/test', (req, res) => {
    res.send("testing page")
})

app.use((req, res, next) => {
    // res.status(404).send(
    //     "<h1>Page not found on the server</h1>")
    res.render('404')
})

app.listen(port, () => {
    console.log(`Express is listening on PORT ${port}`);
})