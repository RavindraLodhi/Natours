const express = require("express");
const userController = require("../controllers/userController")
const router = express.Router();
const AuthControllerSignup = require("../controllers/authController.js");
const authController = require("../controllers/authController.js")
/**********User Rout ********/

router.post('/signup', AuthControllerSignup.signup );
router.post('/signin', AuthControllerSignup.login );
router.post('/forgotPassword',AuthControllerSignup.forgotPassword );
router.patch('/resetPassword/:token',AuthControllerSignup.resetPassword );

router.use(authController.protect)

router.post('/updateMe',userController.updateMe )
router.delete('/deleteMe',userController.deleteMe )
router.patch('/updatePassword',AuthControllerSignup.updatePassword )
router.get('/me',userController.getMe, userController.getUser)

router.use(authController.restrictTo('admin'))

router.route('/')
.get(userController.getAllUser)
.post(userController.createUser)

router.route('/:id')
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser)


module.exports = router;