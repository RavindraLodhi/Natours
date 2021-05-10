const express = require("express");
const { Error } = require("mongoose");
const morgan = require("morgan");
const rateLimit = require('express-rate-limit');
const helmet = require("helmet");
const mongoSanitize = require('express-mongo-sanitize');
const app = express();
const tourRouter = require("./routes/tourRouter.js");
const userRouter = require("./routes/userRouter.js");
const  reviewRouter = require("./routes/reviewRouter.js")
const appError = require('./utils/appError.js');
const globalErroController = require('./controllers/errorController.js');
const hpp = require('hpp');

/****** middleware start */
//exapress global middleware

//SECURITY HTTP MIDDLEWARE
app.use(helmet())

//Body parser  reading data from body or intract with body
app.use(express.json());

// to access public file
app.use(express.static(`${__dirname}/public`))

//Limit for one ip 100/1h
const limiter = rateLimit({
  max : 100,
  windowMs : 60 * 60 * 1000,
  message : 'Too many request from this ip. please try again after an hours.'
})
app.use('/api',limiter);

//Prevent parameter pollution it will hanlde duplicate
//http://localhost:8000/api/v1/tours?page=1&sort=-ratingsAverage&limit=5&fields=ratingsAverage,name,duration,summary&sort=-ratingsAverage
app.use(hpp({
  whitelist : ['duration']
}))

// To remove data, use:
 app.use(mongoSanitize());

app.use((req,res,next) =>{
    console.log("hello from the middle ware...");
    next(); 
});
//own middelware
app.use((req,res,next) =>{
    req.requestTime = new Date().toISOString();
    next(); 
});
//morgan middleware it only for development
app.use(morgan('dev'))

/***********Mouting the router ********/

app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/review',reviewRouter);
app.all('*' ,(req ,res,next) => {
  next(new appError(`can not find ${req.originalUrl} on this server.`,404));
})

app.use(globalErroController)

module.exports = app;



