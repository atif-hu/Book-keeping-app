const mongoose=require("mongoose");

const dbConnect = () =>{
//connect mongoose db
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("db connected"))
.catch(err=>console.log(err));
}

module.exports=dbConnect;

//atif 1
//pass Pqs8bccdhdEnZaMl

// old-atif    LpKDtgT5JP7oCPmm