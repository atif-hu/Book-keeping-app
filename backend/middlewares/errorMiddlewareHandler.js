const errorMiddlewareHandler=(err,req,res,next)=>{
    //set status code
    const errorStatusCode=res.statusCode===200?500:res.statusCode;
    console.log("error",err)
    res.status(errorStatusCode);
    res.json({
        message: err.message,
    });
};

module.exports={errorMiddlewareHandler}