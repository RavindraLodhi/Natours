const crypto = require("crypto")
const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    name : {
     type : String,
     required : [true, 'Please tells us you name'],
     maxlength : [20, "a user maximum length shold be 20."],
     minlength : [5, 'A user should be minimum length should be 5.']
    },
    email : {
        type : String,
        required : [true, 'Please Provide your email.'],
        unique : [true, "This email already exits."],
        lowercase : true,
        validator : [validator.lowercase,'Please provide valid email']
    },
    photo : {
        type : String,
    },
    password : {
     type : String,
     required : [true, 'Please provide your password.'],
     minlength : [6, 'Password should have minmun 6 charactor.'],
     maxlength : [12, 'Password should not be more then 12 charator.'],
     select : false
    },
    passwordConfirm : {
        type : String,
        required : [true, 'Please provide your conformation password.'],
        minlength : [6, 'Password should have minmun 6 charactor.'],
        maxlength : [12, 'Password should not be more then 12 charator.'],
        validate : {
            validator : function(value){
                return value === this.password;
            },
            message : "Password is not the same"
        }

    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    role : {
     type : String,
     enum : ["admin","user","guide","lead-guide"],
     default : 'user'

    },
    passwordChangedAt : Date,
    passwordResetToken : String,
    passwordResetExpires : Date,
    active :{
        type : Boolean,
        default : true,
        select :false
    }
})

userSchema.pre('save',async function(next){
    //only run this function if password was actually modified
 if(!this.isModified('password')) return (next());

 //hash the password with cost of 12
 this.password = await bcrypt.hash(this.password,12); // encripting the password

 //deleting passwordConfirm field.
 this.passwordConfirm = undefined;
})

userSchema.pre('save', function(next){
    if(!this.isModified('password' || this.isNew)) return next();

    this.passwordChangedAt = Date.now() - 1000;
    next()
})

userSchema.pre(/^find/, function(next){
    this.find({active : {$ne : false} })
    next()
})

userSchema.methods.correctPassword = async function(candidatePasswod, userPassword){
    return await bcrypt.compare(candidatePasswod,userPassword)
}

userSchema.methods.changedPasswordAfter = function(JWTTimestump){
    if(this.passwordChangedAt){
    const changeTimeStump = parseInt(this.passwordChangedAt.getTime() / 1000,10);
    console.log(JWTTimestump,changeTimeStump);
    //true means password changed.
    return JWTTimestump < changeTimeStump
    }

    // false means password not change
    return false;
}

userSchema.methods.creatPasswordResetToken = function(){
     const resetToken = crypto.randomBytes(32).toString('hex')

    this.passwordResetToken =  crypto
     .createHash('sha256')
     .update(resetToken)
     .digest("hex");

     this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    console.log(this.passwordResetExpires,this.passwordResetToken);
     return resetToken;

}


const User = mongoose.model('User', userSchema);

module.exports = User;