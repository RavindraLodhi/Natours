const express = require("express");
const tourController = require("../controllers/tourController")
const authController = require("../controllers/authController.js")
const router = express.Router();

/******* Params middleware  ***********/
// router.param("id",tourController.checkID)

router.route("/top-5-cheap")
.get(tourController.aliseTopTours , tourController.tour);

router.route('/tour-status')
.get(tourController.getTourStats);

router.route('/monthly-plan/:year')
.get(tourController.getMonthlyPlan)

router
.route('/')
.get(tourController.tour)
.post(tourController.creatTour)

router
.route('/:id')
.get(tourController.getTour)
.patch(tourController.updateTpur)
.delete(
authController.protect,
authController.restrictTo('admin','lead-guide'),
tourController.deleteTour
)

module.exports = router;