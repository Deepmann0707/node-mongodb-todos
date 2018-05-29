const {MongoClient, ObjectID } = require('mongodb');

let url = 'mongodb://localhost:27017';
let dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
    if(err){
        return console.log('Connection Error');
    }
    let db = client.db(dbName);

    //delete many
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then( (results) => {
    //     console.log(results);
    // });
    //

    //delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then( (r) => {
    //     console.log(r);
    // });

    //findOneAndDelete
    //  db.collection('Todos').findOneAndDelete({ completed: false}).then( (r) => {
    //      console.log(r);
    //  });


    // db.collection('Todos').findOneAndDelete({
    //     _id: new ObjectID('5affd6c515286369ef8f7c37')}).then( (r) => {
    //     console.log(r);
    // });

    //update collection
    //findOneAndUpdate(filter, update, options(optional), callback(optional) )
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5affb3f960343ca728a47cf7')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // } ).then( (r) => {
    //     console.log(r);
    // });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5afd1af3ddc05e7695ccadc7')
    },{
        $set: {
            name: 'Sukhwinder kaur'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    } ).then( (r) => {
        console.log(r);
    });

});