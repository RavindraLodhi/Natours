const User = require('../models/userModel.js');
const appError = require('../utils/appError.js');
const  catchAsy = require("../utils/catchAsy");
const factury = require('../controllers/heandleFactory.js');

const filterObj = (obj, ...allowFields) =>{
    console.log(obj);
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if(allowFields.includes(el)) newObj[el] = obj[el];
    })

    return newObj;
}

exports.getAllUser =catchAsy( async (req, res) =>{
    const users = await User.find();
    res.status(200).json({
        requirstTimeAt : req.requestTime,
        status: "Success",
        result: users.length,
        data:users
    })  
});


exports.createUser = (req, res) =>{
    res.status(500).json({
        status : 'error',
        massage : 'This rout not yet define. '
    })
}

exports.getMe = (req,res,next) =>{
  req.params.id = req.user.id;
  next();
}

exports.getUser = factury.getOne(User);
exports.updateUser = factury.updateOne(User);
exports.deleteUser = factury.deleteOne(User);


exports.updateMe = catchAsy(async (req,res,next) =>{
    console.log(req.body);
//Create error if update password data.
  if(req.body.password  || req.body.passwordConfirm) {
      return next(new appError(`This route is not for password update`,400))
  }
  
  const filterBody = filterObj(req.body, 'name','email')
// update user documnent
 const updateUser = await User.findByIdAndUpdate(req.user.id, filterBody , {
     new: true,
     runValidators : true
 })
  res.status(200).json({
      status : 'success',
      data : {
          user : updateUser
      }

  })
})

exports.deleteMe = catchAsy(async (req,res,next) =>{
    const updatedUser = await User.findByIdAndUpdate(req.user.id , {active :false});
    res.status(200).json({
        status : 'success',
        data : {
            user :  updatedUser
        }
    })
 
})