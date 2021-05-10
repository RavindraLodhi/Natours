//reviw / rating / createAt / reference to tour / reference to user

const mongoose = require('mongoose');

reviewSchema = new mongoose.Schema({
    review :{
        type : String,
        required : [true,"Review should add "],
        min : [10, 'Add minimum 10 charactor.'],
        max : [30, 'You can not add more then 30 charactor.']
    },
    rating : {
        type : Number,
        required : [true, 'Please provide the rating.'],
        min  : [1.5 , "You can't give the rating less then 1.5."],
        max : [5, "You can not give the rating more then 5."]
    },
    createdAt : {
        type : Date,
        default : Date.now
      },
    tour : {
        type : mongoose.Schema.ObjectId,
        ref : 'Tour',
        required : [true, 'Review must belong to tour']
    },
    user : {
        type : mongoose.Schema.ObjectId,
        ref : 'User',
        required : [true, 'Review must belong to user']
    }
    
},
{
    toJSON : {virtuals : true},
    toObject : {virtuals : true}
}
);

// reviewSchema.pre((/^find/,function(next) {
 
// }));

reviewSchema.pre(/^find/, function(next) {
    // this.populate({
    //     path : 'tour',
    //     select : 'name'
    // })
    // .populate({
    //   path : 'user',
    //   select : 'name photo'
    // }) 

    this.populate({
      path : 'user',
      select : 'name photo'
    }) 
    next();
   });

const Review  = mongoose.model('Review', reviewSchema);

module.exports = Review;
