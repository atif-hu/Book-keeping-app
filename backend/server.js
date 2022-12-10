const express=require("express");
const dotenv=require('dotenv');
const userRoutes=require('./routes/userRoutes.js');
const error=require('./middlewares/errorMiddlewareHandler');
const bookRouter = require("./routes/bookRoutes.js");
const app=express();

dotenv.config();    //created env variable to keep the secret keys
require("./config/dbConnect.js")();   //DB connection       //db will be below dev.config as we kept connection string in env


//passing app data
app.use(express.json())
    
//Routes
//User
app.use('/api/users',userRoutes);

//Book
app.use('/api/books',bookRouter)


//error middleware
app.use(error.errorMiddlewareHandler)

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
