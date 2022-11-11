const mongoose=require("mongoose");

const dbConnect = () =>{
//connect mongoose db
mongoose.connect("mongodb+srv://atif:LpKDtgT5JP7oCPmm@cluster0.gjxjpka.mongodb.net/book-keeping-app")
.then(()=>console.log("db connected"))
.catch(err=>console.log(err));
}

module.exports=dbConnect;