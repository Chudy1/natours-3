const express = require('express');
const {
  getSingleTour,
  getOverview,
  getloginForm,
  getAccount,
  getMyTours,
} = require('../controllers/viewsController');
const { isLoggedIn, protect } = require('../controllers/authController');
const { createBookingCheckout } = require('../controllers/bookingController');

const router = express.Router();

router.get('/', createBookingCheckout, isLoggedIn, getOverview);
router.get('/tour/:slug', isLoggedIn, getSingleTour);
router.get('/login', isLoggedIn, getloginForm);
router.get('/me', protect, getAccount);
router.get('/my-tours', protect, getMyTours);

// router.post('/submit-user-data', protect, updateUserData);

module.exports = router;
