const express = require("express");
const userController = require("../controllers/userController")
const router = express.Router();
const AuthControllerSignup = require("../controllers/authController.js");
const authController = require("../controllers/authController.js")
/**********User Rout ********/

router.post('/signup', AuthControllerSignup.signup )
router.post('/signin', AuthControllerSignup.login )

router.post('/forgotPassword', AuthControllerSignup.forgotPassword )
router.post('/resetPassword', AuthControllerSignup.resetPassword )

router
.route('/')
.get(authController.protect,userController.getAllUser)
.post(userController.createUser)

router
.route('/:id')
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser)





module.exports = router;