const mongoose = require("mongoose")
const fs = require('fs')
require('dotenv').config({path : "../../config.env"})
const Tour = require('../../models/tourModel.js');
const User = require('../../models/userModel.js');
const Review = require('../../models/reviewModel.js');
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

 const tourData = JSON.parse(fs.readFileSync('tours.json', 'utf-8'));
 const userData = JSON.parse(fs.readFileSync('users.json', 'utf-8'));
 const reviewData = JSON.parse(fs.readFileSync('reviews.json', 'utf-8'));
 //console.log(data);

 const importData = async () =>{
     try {
         await Tour.create(tourData);
         await User.create(userData,{validateBeforeSave : false});
         await Review.create(reviewData);
         console.log('data added successfully');
         
     } catch (error) {
         console.log(error);
     }
 }

 // delete all data

 const  deleteData = async () =>{
     try {
         await Tour.deleteMany()
         await User.deleteMany()
         await Review.deleteMany()
         .then(
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

// deleteData();
// console.log(process,argv);




/*******************  SERVER *************/
