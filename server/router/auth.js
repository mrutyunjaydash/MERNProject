const express = require('express');
const router = express.Router();
require('../db/conn');
const User = require('../models/userSchema');

router.get('/',(req,res) => {
    res.send('Hello world from the server');
});

/*using promises

router.post('/register',(req,res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"Please fill the details"});
    }

    User.findOne({email:email})
    .then((emailExists) => {
        if(emailExists){
            return res.status(422).json({error:'Email already exists'});
        }
        const user = new User({name, email, phone, work, password, cpassword});

        user.save().then(() => {
            res.status(201).json({ message : "User registered successfully"});
        }).catch((err) => {
            res.status(500).json({error:'Registration failed'});
        }).catch(err => {console.log(err); });
    })
}); 
*/

//using async await

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

        const user = new User({name, email, phone, work, password, cpassword});
        await user.save();
        res.status(200).json({message:'User registered successfully'});

    }
    catch(err){
        console.log(err);
    }
    
})


module.exports = router;