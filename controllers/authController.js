const {promisify} = require('util')
const User = require('../models/userModel.js');
const  catchAsy = require("../utils/catchAsy");
const jwt = require('jsonwebtoken');
const appError = require('../utils/appError.js');

const signToken = id =>{
   return jwt.sign({id:id},process.env.JWT_SECRET_KEY,{
        expiresIn : process.env.JWT_EXPIRE_IN
    })
}


exports.signup = catchAsy(async (req,res,next) =>{
      // const body = req.body;
       const newUser = req.body
    //    {
    //        name : body.name,
    //        email :body.email,
    //        password : body.password,
    //        passwordConfirm : body.passwordConfirm,
    //        passwordChangedAt : body.passwordChangedAt
    //    }
       const user = await User.create(newUser);
       const token = signToken(user._id)

        res.status(201).json({
          token :token,
          status : 'success',
          data :  user
          
        })
})

exports.login = catchAsy(async (req,res,next) =>{
   const {email,password}  = req.body;
   //1) check email and password
   if(!email || !password){
       return next(new appError(`Please provide email and password`,400));
   }

   //2) check user exists and password currect

   const user = await User.findOne({email : email}).select('+password');

   if(!user || !(await user.correctPassword(password,user.password))){
       return next(new appError('Incorrect email or password',401))
   }
 
   //3) if everything ok send it to client
   const token = signToken(user._id);
   res.status(200).json({
       status : 'success',
       token : token,
       data : user
   })

})

exports.protect = catchAsy(async (req,res,next) =>{
// 1) getting token and check of it is there
    let token; 
    req.requestTime = new Date().toISOString();

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
     token = req.headers.authorization.split(" ")[1]
    }

    if(!token){
      return next(new appError(`You are not loged in! please login to get access.`,401))
    }
   
    // 2) validate that jwt token
    const decode = await promisify(jwt.verify)(token,process.env.JWT_SECRET_KEY)
    console.log(decode);
    console.log("1");
    // 3) check user still exists
    const freshUser = await User.findById(decode.id)
    if(!freshUser){
        return next(new appError(`The user beloging to this token does no longer exist.`,401))
    }
    console.log("2");
    // 4) check user if changed password after the token was issued
   if(freshUser.changedPasswordAfter(decode.iat)){
       return next(new appError(`User recently changed the password.`,401))
   }
   console.log("3");
  // GRANT ACCESS TP PROCECTED ROUTE
   req.user = freshUser;
   next()
})

exports.restrictTo = (...roles) => {
    return (req,res,next) =>{
       if(!roles.includes(req.user.role)){
           return next(new appError(`You dont have permission to perform this action.`,403));
       }

       next()
    }
}

exports.forgotPassword = catchAsy( async(req,res,next) =>{
    // 1) get user based on posted email.
    console.log(req.body);
    const user = await User.findOne({"email" : req.body.email})
    console.log(user);
    if(!user){
        return next(new appError(`There is no user with this mail.`,404))
    }

    // 2) genrate the random reset token 
    const resetToken = user.creatPasswordResetToken();
    console.log(resetToken);
    user.save({validateBeforeSave : false});


    // 3) send the user email

});

exports.resetPassword = (req,res,next) =>{

    
}