//import mongoose
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');   
const userRoutes = require('../routes/userRoutes');


//Schema
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
});

//creating middleware for user model by using schema.pre
UserSchema.pre('save',async function(next){
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next();
});

//creating a function to check the entered password

// const ip=async function(email,enteredPass){
//     console.log("pass",enteredPass);
//     console.log("this pass",this.password);

//     return await bcrypt.compare(enteredPass,this.password);
// };


//create model            (model,   schema )
const Users=mongoose.model("Users",UserSchema);


//to make accessible export
module.exports= {Users}; 