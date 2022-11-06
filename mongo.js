const {MongoClient} = require('mongodb')
const mongoURI = 'mongodb+srv://usernair:AlB40tXbYF8dD032@testcluster0.s70kxoj.mongodb.net/sample_airbnb?retryWrites=true&w=majority'
const client = new MongoClient(mongoURI);

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
            // const data = {
            //     name: 'Kshitij',
            //     age: 23
            // }
            let result = await client.db("cs5610").collection('task').insertOne(data);
            console.log(result);
        } catch(err) {
            console.log('Oops, error!', err)
        }
    },
    getAll: async function() {
        let cursor = await client.db('cs5610').collection('task').find();
        const result = await cursor.toArray();

        console.log(result);
        return result;
    }
}