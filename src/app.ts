import express from "express";
import mongoose from 'mongoose'

//Create Express server
const app = express();
const PORT = process.env.PORT || 5000;
const DBURI = 'mongodb://localhost:27017/ecommerce';
//Connect Database
mongoose
    .connect(DBURI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected");
    })
    .catch((error: any)=> {
        console.error(error)
    })


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})