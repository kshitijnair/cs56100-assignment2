const {MongoClient} = require('mongodb')
const mongoURI = 'mongodb://usernamenair:qwerty1234@ac-5asvyoe-shard-00-00.s70kxoj.mongodb.net:27017,ac-5asvyoe-shard-00-01.s70kxoj.mongodb.net:27017,ac-5asvyoe-shard-00-02.s70kxoj.mongodb.net:27017/cs5610?ssl=true&replicaSet=atlas-is1nhf-shard-0&authSource=admin&retryWrites=true&w=majority'
const client = new MongoClient(mongoURI)

const data = require('./testjson')

module.exports = {
    connectToDB: async function () {
      try {
        await client.connect();
        console.log("Connected to DB");
      } catch (err) {
        console.log("Connection error", err);
      }
    },
    addToDb: async function (data) {
        try {
            let result = await client.db("cs5610").collection('wardrobe1').insertOne(data);
            console.log("Added succesfully:", result);
        } catch(err) {
            console.log('Oops, error!', err)
        }
    },
    getAll: async function() {
        let cursor = await client.db('cs5610').collection('task').find();
        const result = await cursor.toArray();
        console.log(result);
        return result;
    },
    getTestData: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        })
    }
}