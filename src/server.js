const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require ('morgan');
const chalk = require ('chalk');

const app = express();
const port = process.env.PORT || 8000;

const  morganChalk = morgan(function (tokens, req, res) {
    return [
        chalk.green.bold(tokens.method(req, res)),
        chalk.red.bold(tokens.status(req, res)),
        chalk.white(tokens.url(req, res)),
        chalk.yellow(tokens['response-time'](req, res) + ' ms'),
    ].join(' ');
});

mongoose.connect('mongodb+srv://admin:abc123!@ecomerce-a9ij9.mongodb.net/ecomerce?retryWrites=true&w=majority',  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(()=> console.log('Database connected!'))
    .catch((error)=> console.error(error));

app.use(morganChalk)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    next();
})
app.use(function (error, req, res, next) {
    if(error instanceof SyntaxError) {
      return res.status(500).send({data : "Invalid data"});
    } else {
      next();
    }
  });
//Routes
app.use('/api', require('./routes'))


app.listen(port, ()=> {
    console.log(`App running on port ${port}!`)
})
