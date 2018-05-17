// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');
let obj = new ObjectID;
console.log(obj);

let url = 'mongodb://localhost:27017';
let dbName = 'TodoApp';

// let user = {name: 'mandeep', age:26};
// let {name} = user;
// console.log(name);

MongoClient.connect(url, (err, client) => {
    if(err){
        return console.log('connection error');
    }

    console.log('Connected to mongodb server');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    //
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todos', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2) );
    // });

    // db.collection('Users').insertOne({
    //     name: 'Mandeep Singh',
    //     age: 26,
    //     location: 'patiala'
    //
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert into users');
    //     }
    //
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    client.close();
} );