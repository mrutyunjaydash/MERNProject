const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path:'./config.env' });

require('./db/conn');

//const User = require('./models/userSchema');

const PORT=process.env.PORT;


app.get('/',(req,res) => {
    res.send('Hello world from the server');
});

app.get('/about',(req,res) => {
    res.send('This is about page');
});

app.get('/contact' , (req,res) => {
    res.send('contact');
})

app.get('/signin',(req,res) => {
    res.send('SignIN');
});

app.get('/signup',(req,res) => {
    res.send('SignUp');
});

app.listen(PORT , () => {
    console.log('server running at port 3000');
});