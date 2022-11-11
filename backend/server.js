const express=require("express");
const mongoose=require("mongoose")
const app=express();

//connect mongoose db
mongoose().connect('mongodb+srv://atif:<LpKDtgT5JP7oCPmm>@cluster0.gjxjpka.mongodb.net/test')
.then(()=>console.log("db connected"))
.catch(err=>console.log(err));

//Routes
  
//User
//Register
app.post('/api/users/register',(req,res)=>{
    res.send("user routes");
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
