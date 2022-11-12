//import mongoose
const mongoose=require("mongoose");

//Schema
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
});

//create model            (model,   schema )
const Users=mongoose.model("Users",UserSchema);


//to make accessible export
module.exports= Users; 