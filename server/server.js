// Validations
//----type: String,
//----required: true,
//----minlength: 1,
//----trim: true,
//----default: value to make file default( null, otherValue, true etc)
let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {ObjectID} = require('mongodb');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');


let app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });
    todo.save()
        .then( (re) => {
            res.send(re);
        })
        .catch( (e) => {
            res.send(e);
        });

} );

app.get('/todos', (req, res) => {
    Todo.find().then( (r) => {
        res.send({r});
    }, (e) => {
        console.log(e);
    });
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then( (todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo: todo})
    }).catch( (e) => {
        res.send(e);
    });


});

app.listen(3000, () => {
    console.log('Started Listening On Port 3000');
});
















