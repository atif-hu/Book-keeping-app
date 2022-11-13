//import mongoose
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');   


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



//create model            (model,   schema )
const Users=mongoose.model("Users",UserSchema);


//to make accessible export
module.exports= Users; 