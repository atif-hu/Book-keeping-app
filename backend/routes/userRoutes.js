const express=require('express');
const Users = require('../models/Users');
const userRoutes=express.Router();
const asyncHandler=require('express-async-handler');
Users
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
userRoutes.post('/login',asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user=await Users.findOne({email});

    if(user && (await Users.isPassword(password))){
        res.status(200);
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password
        })
    }
    else{
        res.status(401);
        throw new Error('Invalid credentials');
        
    }
}))

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