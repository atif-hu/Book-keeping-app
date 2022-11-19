const express=require("express");
const dotenv=require('dotenv');
const userRoutes=require('./routes/userRoutes.js');
const error=require('./middlewares/errorMiddlewareHandler')
const app=express();

dotenv.config();    //created env variable to keep the secret keys
require("./config/dbConnect.js")();   //DB connection       //db will be below dev.config as we kept connection string in env


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
