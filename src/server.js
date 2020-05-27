const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;

mongoose.connect('mongodb+srv://admin:abc123!@ecomerce-a9ij9.mongodb.net/ecomerce?retryWrites=true&w=majority',  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(()=> console.log('Database connected!'))
    .catch((error)=> console.error(error));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    next();
})

//Routes
app.use('/api', require('./routes'))


app.listen(port, ()=> {
    console.log(`App running on port ${port}!`)
})
