const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://usernair:qwerty1234@testcluster0.s70kxoj.mongodb.net/cs5610?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect()
//     .then(()=> {
//     console.log('done')
//     }).catch((err) => {
//     console.log(err)
//     });

module.exports = {
    data: [
        {
            'title': 'Kaala Chacchma',
            'description': 'whatDoYouMeanItsAKAALACHACCHMABITCH'
        },
        {
            'title': 'Langoti',
            'description': 'Gold toh gold hota hai ... chhora lave ya chhori.'
        },
        {
            'title': 'Pink Purse',
            'description': 'Woh kaun he jisne Poo ko mudke nahi dekha!?'
        },
        {
            'title': 'Krrish Costume',
            'description': 'Meri shaktiyon ka galat istemal kiya ja raha he maa'
        }
    ]
}