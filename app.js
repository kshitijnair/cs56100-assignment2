const express = require('express')
const axios = require('axios')
const dotenv = require('dotenv')
const database = require('./mongo')
const jsonSample = require('./testjson.js')
const { json } = require('express')

let testData;

database.connectToDB();

database.getTestData().then((data) => {
    testData = data;
    // console.log(testData);
});

// const { MongoClient } = require('mongodb')

dotenv.config();
const app = express()
const port = process.env.PORT || 3002;

// database.connectToDB();

// Serving static files
app.use(express.static('public'));
app.use(express.json())
// app.use(express.urlencoded())

app.set("view engine", "pug");
app.set("views", "./views");

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/test', (req, res) => {
    res.send("testing page")
})

app.post('/addItem', (req, res) => {
    let jsonData = req.body
    console.log('*******************************')
    console.log(jsonData)
    // add to DB here

    database.addToDb(jsonData);
    
    console.log("ADDING ITEM ROUTE AS POST IS WORKING.")
    res.sendStatus(200)
})

app.use((req, res, next) => {
    res.render('404')
})

app.listen(port, () => {
    console.log("---------------------------------------")
    console.log(`Express is listening on PORT ${port}`);
})