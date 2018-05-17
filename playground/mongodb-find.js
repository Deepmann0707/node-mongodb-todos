// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');
let obj = new ObjectID;
console.log(obj);

let url = 'mongodb://localhost:27017';
let dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
    if(err){
        return console.log('connection error');
    }

    console.log('Connected to mongodb server');

    const db = client.db('TodoApp');

    // db.collection('Todos').find({ _id: new ObjectID('5afd1893d1672474f35fc82b')}).toArray()
    //     .then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }).catch( (e) => {
    //     console.log(e);
    // });

    /*db.collection('Todos').find().count()
        .then((count) => {
            console.log(`counts`, count);

        }).catch( (e) => {
        console.log(e);
    });*/

    db.collection('Users').find( { name: 'Mandeep Singh'}).toArray().then( (user) => {
        console.log('Users are ', user);
    });
    // client.close();
} );