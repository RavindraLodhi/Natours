const catchAsy = require('../utils/catchAsy.js');
const APIFeature = require('../utils/APIFeature');
const appError = require('../controllers/errorController.js');

exports.deleteOne = model => catchAsy(async (req, res, next) => {
    const docs =  await model.findByIdAndDelete(req.params.id);
    if(!docs){
        return next(new appError(`Not Document foud with that Id ${id}`))
    } 

    res.status(202).json({
            status: 'Success',
            data: null,
            massage : "document Removed Successfully."
    });
});

exports.updateOne = Model => catchAsy(async (req, res,next) => {
    const body = req.body;
       await Model.findByIdAndUpdate(req.params.id,body,{
       new : true,
       runValidators : true
       }).then(data =>{
        res.status(200).json({
            status: 'success',
            data: {
              tour: data
            }
          });
       })
});

exports.createOne = Model => catchAsy(async (req, res, next) => { 
    await Model.create(req.body).then(doc => {
        res.status(201).json({
            status : "Success", 
            data : {doc}
        })
    })  
})

exports.getOne = (Model,popOption) =>  catchAsy(async (req, res,next) => {
    let quary = Model.findById(req.params.id);
    if(popOption) quary.populate(popOption);
    const docs = await quary;

    if(!docs){
        return next(new appError(`Not document found with that Id`,404))
    } 
    res.status(200).json(
        {
         "massage" : "success",
         "data" : {docs}
    })
})

exports.getAll = Model =>  catchAsy(async (req, res,next) => {
   // to allow nested get review on tour.
    let filter = {}
    if(req.params.tourId) filter = {tour : req.params.tourId}

    const features = new APIFeature(Model.find(filter), req.query)
    .filter()
    .sort()
    .limit()
    .pagination();
    const docs = await features.query
    //.explain(); to check the performance.
     res.status(200).json({
         requirstTimeAt : req.requestTime,
         status: "Success",
         result: docs.length,
         data: {
            docs
         }
     })    
});