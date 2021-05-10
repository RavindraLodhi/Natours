const Review = require("../models/reviewModel.js");
const factury = require('../controllers/heandleFactory.js');
// const  catchAsy = require("../utils/catchAsy");

exports.setTourUserId = (req,res,next) =>{
    if(!req.body.tour) req.body.tour = req.params.tourId;
    if(!req.body.user) req.body.user = req.user.id;
    next();
}

exports.getAllReviews  = factury.getAll(Review)
exports.getReview = factury.getOne(Review);
exports.createReview =  factury.createOne(Review);
exports.update = factury.updateOne(Review);
exports.delete = factury.deleteOne(Review);