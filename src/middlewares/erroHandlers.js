
const errorsHandlers=(err,req,res,next)=>{
    console.error(err.stack);
    const statusCode= err.statusCode || 500;
    const message=err.message||'Internal Server Error';

    res.status(statusCode).json({
        success:false,
        message:message
    });   
}

const error=(statusCode,message,next)=>{
    const error=new Error(message);
    error.statusCode=statusCode;
    next(error);
}

module.exports={
    errorsHandlers,
    error
}
