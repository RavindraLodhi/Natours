const express = require("express");
const { Error } = require("mongoose");
const morgan = require("morgan");
const app = express();

const tourRouter = require("./routes/tourRouter.js");
const userRouter = require("./routes/userRouter.js");
const appError = require('./utils/appError.js');
const globalErroController = require('./controllers/errorController.js')

/****** middleware start */
//exapress middleware 
app.use(express.json());
// to access public file
app.use(express.static(`${__dirname}/public`))
//own middelware
app.use((req,res,next) =>{
    console.log("hello from the middle ware...");
    next(); 
});
//own middelware
app.use((req,res,next) =>{
    req.requestTime = new Date().toISOString();
    next(); 
});
//morgan middleware
app.use(morgan('dev'))

/***********Mouting the router ********/

app.use('/api/v1/tours',tourRouter)
app.use('/api/v1/users',userRouter)
app.all('*' ,(req ,res,next) => {
  next(new appError(`can not find ${req.originalUrl} on this server.`,404));
})

app.use(globalErroController)

module.exports = app;



