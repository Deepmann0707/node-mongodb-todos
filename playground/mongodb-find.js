// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');
let obj = new ObjectID;
// console.log(obj);

let url = 'mongodb://localhost:27017';
let dbName = 'TodoApp';



MongoClient.connect(url, (err, client) => {
    if(err){
      return console.log('Unable to connect with mongodb server');
    }

    let db = client.db('TodoApp');
    console.log('Connected with server');

    db.collection('Todos').find().toArray().then( (docs) => {
        console.log(JSON.stringify(docs, undefined, 3));
    });

});


    // db.collection('Todos').find().count()
    //     .then((count) => {
    //         console.log(`counts`, count);
    //
    //     }).catch( (e) => {
    //     console.log(e);
    // });

    // db.collection('Users').find( { name: 'Mandeep Singh'}).toArray().then( (user) => {
    //     console.log('Users are ', user);
    // });
    // client.close();

