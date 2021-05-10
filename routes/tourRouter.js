const express = require("express");
const tourController = require("../controllers/tourController")
const authController = require("../controllers/authController.js");
const reviewController = require('../controllers/reviewController.js');
const reviewerRouter = require('../routes/reviewRouter.js')
const router = express.Router();

/******* Params middleware  ***********/
// router.param("id",tourController.checkID)

router.route("/top-5-cheap")
.get(tourController.aliseTopTours , tourController.tour);

router.route('/tour-status')
.get(tourController.getTourStats);

router.route('/monthly-plan/:year')
.get(
    authController.protect,
    authController.restrictTo('admin','lead-guide'),
    tourController.getMonthlyPlan
    )

router
.route('/')
.get(tourController.tour)
.post(
    authController.protect,
    authController.restrictTo('admin','lead-guide'),
    tourController.creatTour
    )

router
.route('/:id')
.get(tourController.getTour)
.patch(
    authController.protect,
    authController.restrictTo('admin','lead-guide'),
    tourController.updateTpur)
.delete(
    authController.protect,
    authController.restrictTo('admin','lead-guide'),
    tourController.deleteTour
   )

// nested route

router.use('/:tourId/reviews',reviewerRouter)

module.exports = router; 