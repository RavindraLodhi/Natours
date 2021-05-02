const User = require('../models/userModel.js');
const  catchAsy = require("../utils/catchAsy");


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

exports.getUser = (req, res) =>{
    res.status(500).json({
        status : 'error',
        massage : 'This rout not yet define. '
    })
}

exports.updateUser = (req, res) =>{
    res.status(500).json({
        status : 'error',
        massage : 'This rout not yet define. '
    })
}

exports.deleteUser = (req, res) =>{
    res.status(500).json({
        status : 'error',
        massage : 'This rout not yet define. '
    })
}
