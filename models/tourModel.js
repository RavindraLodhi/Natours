const mongoose = require("mongoose");
const slugify = require('slugify');
const Review = require("./reviewModel");
//const User = require('../models/userModel.js')
// const validator = require('validator')
const tourSchema = new mongoose.Schema({
    name : {
      type : String,
      required : [true,'A tour has must have name.'],
      unique : true,
      maxlength : [20, 'Name should be less then 10 '],
      minlength : [10, 'Name must have at least 10 charator.'],
      // validate : [validator.isAlpha , 'The name is only content charator.']
    },
    duration : {
      type : Number,
      required : "A tour must have duration."
    },
    slug : String,
    maxGroupSize : {
      type : Number,
      required : "A tour must have maximum group size."
    },
    difficulty : {
      type :String,
      required : "A tour must have difficulty.",
      enum : {
       values : ['easy','medium','difficult'],
       massage : 'Difficulty is either : easy ,medum, difficult'
      },

    },
    ratingsAverage : {
     type : Number,
     default : 4.5,
     min : [1,'Rating Should not be less then 1'],
     max : [5, 'Rating should not be grater then 5']
    },
    ratingsQuantity : {
      type : Number,
      default :0
     },
    price : {
     type : Number,
     required :[true,"tour must have price"]
    },
    priceDiscount : {
      type : Number,
     validate : {
      validator : function(value){
        // this only pointed to current doc on new document Creation.
        return value <  this.price //costum validation and it will not work 
      },
     }
    } ,
    summary : {
      type : String,
      trim : true,
      required : [true, "tour must have a summary."]
    },
    description : {
      type : String,
      trim : true
    },
    secretTour : {
    type :Boolean,
    default : false,
    },
    imageCover : {
      type : String,
      required : [true,"tour must have a image cover"],
    },
    images : [String],
    createdAt : {
      type : Date,
      default : Date.now
    },
    startDates : [Date],
    startLocation : {
      //Geo json
      type : {
        type : String,
        default : "Point",
        enum : ["Point"]
      },
      coordinates : [Number],
      address  : String,
      description : String
    },
    locations :[ {
      //Geo json
      type : {
        type : String,
        default : "Point",
        enum : ["Point"]
      },
      coordinates : [Number],
      address  : String,
      description : String,
      day : Number
    }],
    guides : [
      {
      type : mongoose.Schema.ObjectId,
      ref : 'User'
      }
    ],
    review : [
      {
        type : mongoose.Schema.ObjectId,
        ref : 'Review'
      }
    ]
}
,{
  toJSON : {virtuals : true},
  toObject : {virtuals : true}
})

//indexes
tourSchema.index({price : 1})


//vertual property 
tourSchema.virtual('durationWeaks').get( function(){
  return this.duration / 7;
});

//virtual populate
tourSchema.virtual('reviews', {
  ref : 'Review',
  foreignField : 'tour',
  localField : '_id'
  
})

//DOCUMENT MIDDELWARE : RUN BEFORE .SAVE() AND CREATE.
tourSchema.pre('save' , function(next) {
 this.slug = slugify(this.name, {lower : true})
 next();
});

// tourSchema.pre('save',async function (next) {
//   const GuidePromises  = this.guides.map(async id => await User.findById(id));
//   console.log(GuidePromises);
//   this.guides = await Promise.all(GuidePromises);
//   console.log(this.guides, "this.guides");
//   next();
// })
//thi middelware will call after saving the data
// tourSchema.post('save', function(doc,next){
//   console.log(doc);
//   next()
// })

//vertual populat



//Quary middleware middel ware
tourSchema.pre(/^find/, function(next){
  this.find({secretTour : {$ne : true}})
  next();
})

tourSchema.post(/^find/, function(doc,next){
  next();
})

tourSchema.pre(/^find/, function (next) {
  this.populate({
    path : 'guides',
    select  : "-__v -passwordChangedAt"
})
next();
})



const Tour = mongoose.model('Tour',tourSchema);

module.exports = Tour