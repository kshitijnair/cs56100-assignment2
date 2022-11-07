const express = require('express')
const axios = require('axios')
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const database = require('./mongo')
const { ObjectId } = require("mongodb");
const jsonSample = require('./testjson.js')

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

// for parsing application/json
app.use(bodyParser.json()); 
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing multipart/form-data
app.use(upload.array());

// Serving static files
app.use(express.static('public'));
app.use(express.json())
// app.use(express.urlencoded())

app.set("view engine", "pug");
app.set("views", "./views");

app.get('/', async (req, res) => {
    const wardrobe = await database.getAll();
    // console.log(wardrobe);
    res.render('index', {wardrobe: wardrobe})
})

app.get('/test', (req, res) => {
    res.send("testing page")
})

app.post('/addItem', (req, res) => {
    let jsonData = req.body
    console.log('*******************************')
    console.log(jsonData)

    database.addToDb(jsonData);

    console.log("ADDING ITEM ROUTE AS POST IS WORKING.")
    res.sendStatus(200)
})

app.get('/getItem', async (req, res) => {
    console.log('******************************')
    const id = req.query['id'];
    let item = await database.readOne({_id: ObjectId(id)});
    console.log(item);
    // res.json(item);
    res.render('item', {title: item.title, description: item.description, _id: item._id})
})

app.delete('/deleteItem', async (req, res) =>{
    console.log('deleting item')
    const id = req.query['id'];
    console.log(id)
    let result = await database.deleteOne({_id: ObjectId(id)});
    console.log(result);
    res.send(result)
})

app.use((req, res, next) => {
    res.render('404')
})

app.listen(port, () => {
    console.log("---------------------------------------")
    console.log(`Express is listening on PORT ${port}`);
})