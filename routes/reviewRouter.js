const express = require('express');
const reviewController = require('../controllers/reviewController.js');
const authController = require('../controllers/authController.js');
const router = express.Router({mergeParams : true});

 router.route("/")
 .get(reviewController.getAllReviews)
 .post(authController.protect,
     authController.restrictTo('user'), 
     reviewController.setTourUserId,
     reviewController.createReview
  )

router.route('/:id')
.delete(
    authController.protect,
    authController.restrictTo('admin','user'),
    reviewController.delete
)
.patch(
    authController.protect,
    reviewController.update
).get(
    authController.protect,
    reviewController.getReview
)


 module.exports = router;