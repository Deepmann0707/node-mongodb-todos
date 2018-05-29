const MongoClient = require('mongodb');

let url = 'mongodb://localhost:27017';
let dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
    if(err){
        return console.log('Connection Error');
    }
    let db = client.db(dbName);

    db.collection('Todos').insertOne({
        name: 'sukh',
        text: 'this is sukh',
        completed: false

    }, (err, results) => {
        if(err){
            return console.log('Error');
        }
         console.log(results.ops);
    })
});