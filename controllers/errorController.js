const AppError = require('../utils/appError.js')

const heanldleCastError = err =>{
  const message = `Invalid ${err.path} : ${err.value}.`;
  return new AppError(message,400)
}

const handleJwtError = err =>  new AppError(`Invalid token please login again.`,401);
const handleJwtExpiredError = err =>  new AppError(`Token has been expired! please login again.`,401);
 

const heanldleDuplicateFielsDb = err =>{
    const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
    const message = `Duplicate field value: ${value}. please use anathor value.` 
    return new AppError(message,400)
}

const sendErrorDev = (err,res) =>{
    res.status(err.statusCode).json({
        status : err.status,
        massage : err.message,
        error  : err,
        stack : err.stack
    })
}

const sendErrorPro = (err, res) =>{
 return  res.status(err.statusCode).json({
        status : err.status,
        message : err.message,
    })
}

const hendleValidationErrorDb = (err,res) =>{
    const errors = Object.values(err.errors).map(el => el.message);
    const message = `Invaid input data ${errors.join('. ')}`
    
    return new AppError(message,400)
}
module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    if(process.env.NODE_ENV == "development"){
        sendErrorDev(err,res);

    }else if(process.env.NODE_ENV == "production"){
        let error = err
        console.log(error.name);
        if(error.name === 'CastError' ) error = heanldleCastError(error, res) 
        if(error.code === 11000 ) error = heanldleDuplicateFielsDb(error, res) 
        if(error.name === 'ValidationError') error = hendleValidationErrorDb(error,res);
        if(error.name === 'JsonWebTokenError' ) error = handleJwtError(error)
        if(error.name === 'TokenExpiredError' ) error = handleJwtExpiredError(error)
        sendErrorPro(error, res);
        // sendErrorPro(error, res);


    }else{

    }
}