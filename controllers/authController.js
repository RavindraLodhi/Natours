const crypto = require('crypto')
const {promisify} = require('util')
const User = require('../models/userModel.js');
const  catchAsy = require("../utils/catchAsy");
const jwt = require('jsonwebtoken');
const appError = require('../utils/appError.js');
const sendMail = require('../utils/email.js')


const signToken = id =>{
   return jwt.sign({id:id},process.env.JWT_SECRET_KEY,{
        expiresIn : process.env.JWT_EXPIRE_IN
    })
}
const createSendToken = (user,statusCode,res)  => {
    const token = signToken(user.id);
    const cookiesOpt = {
        expires : new Date(
            Date.now() + process.env.COOKIES_EXPIRE_IN * 24 *60 * 60 *1000
        ),
        httpOnly : true
    }

    if(process.env.NODE_ENV === 'production') cookiesOpt.secure = true;
    res.cookie('jwt',token , cookiesOpt)

    //remove the password
    user.password = undefined
    
    res.status(200).json({
        status : 'success',
        token : token,
        data : user
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

      createSendToken(user,201,res);
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
 
   //3) if everything ok send it to clien
    createSendToken(user,200,res);

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
    // 3) check user still exists
    const freshUser = await User.findById(decode.id)
    if(!freshUser){
        return next(new appError(`The user beloging to this token does no longer exist.`,401))
    }
    // 4) check user if changed password after the token was issued
   if(freshUser.changedPasswordAfter(decode.iat)){
       return next(new appError(`User recently changed the password.`,401))
   }
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
    const user = await User.findOne({"email" : req.body.email})
    if(!user){
        return next(new appError(`There is no user with this mail.`,    404))
    }

    // 2) genrate the random reset token 
    const resetToken = user.creatPasswordResetToken();

    user.save({validateBeforeSave : false});


    // 3) send the user email

    const resetURL =  `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}`
    console.log(resetURL,"resetURL");

    const message = `Forgot your password ? Submit a pacth request wit your new password
    and password conform to: ${resetURL} \n if you did not forgot you password please 
    igmore this mail!.`

    try {
        await sendMail({
            email : user.email,
            super : 'Your passwrd reset token (valid for 10 minits).',
            message : message
        })
    
        res.status(200).json({
            status : 'success',
            message : 'Token sent to mail.'
        })
    
        
    } catch (error) {
        console.log(error);
        user. passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        user.save({validateBeforeSave : false});
        return next(new appError(`There was an error while send the link!. please try again.`,500))
    }
    
 



});

exports.resetPassword = catchAsy(async (req,res,next) =>{
  // 1) Get user based on token 
    const hashedToken  = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex')

    const user  = await User.findOne({passwordResetToken : hashedToken,
        passwordResetExpires : {$gt : Date.now()}})

  // 2) if token no expired, and there is a user, set a new password

  if(!user){
    return next(new appError(`Token is invalid or has exapired!.`,400))
  }
  user.password = req.body.password;
  user.passwordConfirm  = req.body.passwordConfirm;
  user.passwordResetToken = undefined
  user.passwordResetExpires = undefined
  await user.save();

  // 3) update changed password property for user

  //4) log the user in send jwt 
  createSendToken(user,201,res);
})


exports.updatePassword =  catchAsy(async (req,res,next) =>{
    // 1) get user from collection
    const user = await User.findById(req.user.id).select('+password');

    // 2) check if posted current passwor is currect
    if(await !user.correctPassword(req.body.passwordCurrent, user.password)){
        return next(new appError(`Your current password is wrong`,401))
    }
    // 3) if so, update the password
    user.password = req.body.password
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();
   // 4) send the token
    createSendToken(user,200,res);
    //NOT using findbyidandupadat becouse some validation will not work

})