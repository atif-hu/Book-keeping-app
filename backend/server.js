const express=require("express");
const Users = require("./models/Users.js");
require("./config/dbConnect.js")();   //DB connection
const app=express();

app.use(express.json())

//Routes
  
//User
//Register
app.post('/api/users/register',async (req,res)=>{
    try {
        const user=await Users.create(req.body);
        console.log(user);
        res.send(user);
    } catch (error) {
        console.log(error);
    }
})   
   
//login 
app.post('/api/users/login',(req,res)=>{
    res.send("login routes");
})

//update user
app.put('/api/users/update',(req,res)=>{
    res.send("update routes");
})

//delete
app.delete('/api/users/:id',(req,res)=>{
    res.send("delete routes");
})

//fetch data
app.get('/api/users',(req,res)=>{
    res.send("fetch user");
})


const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})


//user name= atif
//password = LpKDtgT5JP7oCPmm
// I am making some changes
