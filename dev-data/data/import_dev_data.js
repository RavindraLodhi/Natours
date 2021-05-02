const mongoose = require("mongoose")
const fs = require('fs')
require('dotenv').config({path : "../../config.env"})
const Tour = require('../../models/tourModel')
/****************************database conections********** */

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
     process.env.DATABSE_PASSWORD
    );

console.log(process.env.DATABASE);

mongoose.connect(DB,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false
 })
 .then(conn => {
     console.log("database connected...");
 })

 //Read file 

 const data = JSON.parse(fs.readFileSync('tours-simple.json', 'utf-8'));
 //console.log(data);

 const importData = async () =>{
     try {
         await Tour.create(data);
         console.log('data added successfully');
         
     } catch (error) {
         console.log(error);
     }
 }

 // delete all data

 const  deleteData = async () =>{
     try {
         await Tour.deleteMany().then(
         ).catch(error => {
             console.log("err",error);
         });
         console.log('data delete successfully....');
     } catch (error) {
         console.log("error",error);
     }
 }


 console.log();
 importData();

 //deleteData();
// console.log(process,argv);




/*******************  SERVER *************/
