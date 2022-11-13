const express=require("express");
const userRoutes=require('./routes/userRoutes.js');
const error=require('./middlewares/errorMiddlewareHandler')
require("./config/dbConnect.js")();   //DB connection
const app=express();

//passing app data
app.use(express.json())

//Routes
app.use('/api/users',userRoutes);
   
//error middleware
app.use(error.errorMiddlewareHandler)

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
