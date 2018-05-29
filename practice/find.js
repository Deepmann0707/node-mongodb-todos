const {MongoClient, ObjectID} = require('mongodb');
// let obj = new ObjectID();
// console.log(obj);
let url = 'mongodb://localhost:27017';
let dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
    if(err){
        return console.log('Connection Error');
    }

    let db = client.db(dbName);
    console.log('Connected');

    db.collection('Todos').find({name: 'sukh'}).toArray().then( (users) => {
        console.log(users);
    });
});