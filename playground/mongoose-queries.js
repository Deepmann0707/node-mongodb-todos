const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');


let id = '6b03d35f26c29fc453b580bf';

if(!ObjectID.isValid(id)){
    console.log('Id is not valid');
}
// Todo.find({
//     _id: id
// }).then( (todos) => {
//     console.log('todos', todos);
// }).catch( (e) => {
//     console.log(e);
// } );
//
// Todo.findOne({
//     _id: id
// }).then( (todo) => {
//     console.log('one todo', todo);
// }).catch( (e) => {
//     console.log(e);
// } );

Todo.findById(id).then( (todo) => {
    if(!todo){
        return console.log('Id Not Found');
    }

}).catch( (e) => {
    console.log(e);
} );