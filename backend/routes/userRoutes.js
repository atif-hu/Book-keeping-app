const express=require('express');
const Users = require('../models/Users');
const userRoutes=express.Router();
const asyncHandler=require('express-async-handler');

//User
//Register
userRoutes.post('/register',asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body;
    
    const userExists=await Users.findOne({email: email});
    if(userExists){
        throw new Error('User already exists');
    }
    const user=await Users.create({name,email,password});
    res.send("user created\n"+user);

}))   

//login 
userRoutes.post('/login',(req,res)=>{
    res.send("login routes");
})

//update user
userRoutes.put('/update',(req,res)=>{
    res.send("update routes");
})

//delete
userRoutes.delete('/:id',(req,res)=>{
    res.send("delete routes");
})

//fetch data
userRoutes.get('/',(req,res)=>{
    res.send("fetch user");
})

module.exports=userRoutes;