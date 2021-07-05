const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const router = express.Router();
require('../db/conn');
const User = require('../models/userSchema');
const authenticate = require('../middleware/authenticate');

router.get('/',(req,res) => {
    res.send('Hello world from the server');
});

//register route

router.post('/register', async(req,res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"Please fill the details"});
    }
    try{
        const emailExists = await User.findOne({email:email});
        if(emailExists){
            return res.status(422).json({error:'Email already exists'});
        }
        else if(password != cpassword){
            return res.status(422).json({error:'Password does not match'});
        }
        else{
            const user = new User({name, email, phone, work, password, cpassword});
            await user.save();
            res.status(200).json({message:'User registered successfully'}); 
        }
    }
    catch(err){
        console.log(err);
    }
    
})

//login route

router.post('/signin',async(req,res) =>{
    const { email ,password } = req.body;
    if(!email || !password){
        return res.status(400).json({error:"Please fill the data"});
    }
    try{
        const UserLogin = await User.findOne({email:email});
        if(UserLogin){
            const isMatch = await bcrypt.compare(password,UserLogin.password);

            const token = await UserLogin.generateAuthtoken();

            res.cookie('jwtoken',token, {
                expires:new Date(Date.now() + 9000000),
                httpOnly:true
            });

            if(!isMatch){
                res.status(400).json({error:'Invalid Credentials pass'});
            }
            else{
                res.status(200).json({message:"Logged in Successfully"});
            }
        }
        else{
            res.status(400).json({error:'Invalid Credentials'});
        }    
    }catch(err){
        console.log(err);
    }
})

//about route
router.get('/about',authenticate,(req,res) => {
    res.send(req.rootUser);
});


//get data
router.get('/getData',authenticate,(req,res) => {
    res.send(req.rootUser);
});

module.exports = router;