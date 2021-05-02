const mongoose = require("mongoose")
require('dotenv').config({path : "./config.env"})
const app = require("./app")


/****************************database conections********** */

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABSE_PASSWORD);

mongoose.connect(DB,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false
 })
 .then(conn => {
     console.log("database connected...");
 }).catch(err =>{
     console.log(err);
 })


/*******************  SERVER *************/
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log(DB);
    console.log(`App running on port ${PORT}`);
})

//unhendle error exception like db connection

process.on("unhandledRejection", err => {
    console.log(err.name, err.message);
    console.log('unhandle error');
    server.close(res => {
        process.exit(1)
    })
})



