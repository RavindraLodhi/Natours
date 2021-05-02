const mongoose = require("mongoose");
const slugify = require('slugify');
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
    startDates : [Date]
},{
  toJSON : {virtuals : true},
  toObject : {virtuals : true}
})

//vertual property 
tourSchema.virtual('durationWeaks').get( function(){
  return this.duration / 7;
});

//DOCUMENT MIDDELWARE : RUN BEFORE .SAVE() AND CREATE.
tourSchema.pre('save' , function(next) {
 this.slug = slugify(this.name, {lower : true})
 next();
});
//thi middelware will call after saving the data
// tourSchema.post('save', function(doc,next){
//   console.log(doc);
//   next()
// })





//Quary middleware middel ware
tourSchema.pre(/^find/, function(next){
  this.find({secretTour : {$ne : true}})
  next();
})

tourSchema.post(/^find/, function(doc,next){
  next();
})



const Tour = mongoose.model('Tour',tourSchema);

module.exports = Tour