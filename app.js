const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

dotenv.config({ path:'./config.env' });

require('./db/conn');

app.use(cookieParser());

app.use(express.json());

app.use(require('./router/auth'));

//const User = require('./models/userSchema');

const PORT=process.env.PORT || 8000;

/*
app.get('/about',(req,res) => {
    res.send('This is about page');
});
*/

/*app.get('/contact' , (req,res) => {
    res.send('contact');
})
*/
/*
app.get('/signin',(req,res) => {
    res.send('SignIN');
});

app.get('/signup',(req,res) => {
    res.send('SignUp');
});
*/

if ( process.env.NODE_ENV == "production"){

    app.use(express.static("client/build"));
}

app.listen(PORT , () => {
    console.log('server running at port 8000');
});