const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { Users } = require("../models/Users");

const authMiddleware=asyncHandler(async (req,res,next)=>{
    let token;
    console.log(req.headers.authorization);
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token=req.headers.authorization.split(' ')[1];
            const decoded=jwt.verify(token,process.env.JWT_token);
            const user=await Users.findById(decoded.id);
            req.user=user;
            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, invalid token");
        }
    }
})

module.exports=authMiddleware;