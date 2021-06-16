const express = require('express');
const router = express.Router();
require('../db/conn');
const User = require('../models/userSchema');

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
        const emailvalid = await User.findOne({email:email});
        const pwdvalid = await User.findOne({password:password});
        if(!emailvalid || !pwdvalid){
            return res.status(422).json({error:'Invalid Credentials'});
        }
        res.status(200).json({message:"Logged in Successfully"});
    }catch(err){
        console.log(err);
    }
})


module.exports = router;