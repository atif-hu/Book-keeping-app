const mongoose=require("mongoose");

const dbConnect = () =>{
//connect mongoose db
mongoose.connect("mongodb+srv://atif1:Pqs8bccdhdEnZaMl@cluster0.gjxjpka.mongodb.net/book-keeping-app")
.then(()=>console.log("db connected"))
.catch(err=>console.log(err));
}

module.exports=dbConnect;

//atif 1
//pass Pqs8bccdhdEnZaMl

// old-atif    LpKDtgT5JP7oCPmm