const express = require('express');
const {
  getAllReviews,
  createReview,
  deleteReview,
  updateReview,
  setUserTourIds,
  getSingleReview,
} = require('../controllers/reviewController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(protect);

router
  .route('/')
  .get(getAllReviews)
  .post(restrictTo('user'), setUserTourIds, createReview);

router
  .route('/:id')
  .get(getSingleReview)
  .patch(restrictTo('user', 'admin'), updateReview)
  .delete(restrictTo('user', 'admin'), deleteReview);

module.exports = router;
