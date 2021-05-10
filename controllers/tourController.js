const fs =  require('fs');
const Tour =require('../models/tourModel');
const  catchAsy = require("../utils/catchAsy");
const appError = require('../utils/appError.js');
const factury = require('../controllers/heandleFactory.js')
/****************File system */
// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// )

/******* parameter middleware ******/

exports.checkID =(req,res,next,val) => {
    if(req.params.id * 1 > tours.length){
     return  res.status(404).json(
            {
             "massage" : "Faild",
             "data" : "Not find"
            }
         )
 
     }
     next();
}

exports.aliseTopTours = (req,res,next) =>{
    req.query.limit=5;
    req.query.fields= 'ratingsAverage,name,duration,summary'
    req.query.sort= "ratingsAverage"
    next();
}

/******* check body using middleware */

// exports.checkBody = (req,res,nex) =>{
//     console.log(req.body);
//     if(!req.body.name || !req.body.price){
//         return res.status(400)
//         .json({
//             status : 'Fail',
//             massage : 'Missing name and price.'
//         })
//     }
//     nex();
// }

/********Rouetr **********/
exports.tour = factury.getAll(Tour);
exports.getTour =  factury.getOne(Tour, {path : 'reviews'})
exports.creatTour =  factury.createOne(Tour);
exports.updateTpur = factury.updateOne(Tour);
exports.deleteTour = factury.deleteOne(Tour);

exports.getTourStats = catchAsy( async (req,res,next) =>{
        const stats = await Tour.aggregate([
            {
                $match : { ratingsAverage : {$gte : 4.5}}
    
            },
            {
               $group : { 
                   _id: { $toUpper : "$difficulty"},
                   num : {$sum : 1},
                   avgRating : {$avg : '$ratingsAverage'},
                   avgPrice : {$avg : '$price'},
                   minPrice : {$min : '$price'},
                   maxPrice : {$max : '$price'},
                   sumPrice : {$sum : '$price'}
               }
            },
            {
                $sort : {
                    avgPrice : 1 
                }
            },
            // {
            //     $match : {_id : {$ne : 'EASY'}}
            // }
        ])
    
        res.status(202).json({
            status: 'Success',
            data: stats
        })
})

exports.getMonthlyPlan = catchAsy(async (req,res,next) =>{
    const years = req.params.year * 1; // 2021
    const plan = await Tour.aggregate([
        {  
            $unwind : '$startDates'
        },
        {
            $match : {  
                startDates :{
                    $gte : new Date(`${years}-01-01`),
                    $lte : new Date(`${years}-12-31`)
                }
            }
        },
        {
            $group : {
                _id : {
                    $month : '$startDates',
                },
                numTourStarts : {
                  $sum : 1
                },
                tours : {
                    $push : '$name'
                }
            }
        },
        {
            $addFields : {
                month : '$_id'
            }
        },
        {
            $project : {
                _id : 0
            }
        },
        {
            $sort :{
                numTourStarts : -1
            }
        },
        {
            $limit : 6
        }
    ])

    res.status(202).json({
        status: 'Success',
        data: plan
    })


}) 