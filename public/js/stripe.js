/*eslint-disable */
import axios from 'axios';
import { showAlert } from './alert.js';
import { loadStripe } from '@stripe/stripe-js';

// const stripe = Stripe(
//   'pk_test_51LBEZMEQ4J9XHH9EYQAFt30oLtmj8u74HGW6KDfH0rtIk58QemIOR99DEO0PwlRsRtca5fgNnVa2sKxJ3RtUwERx00TLNjAneJ'
// );

export const bookTour = async (tourId) => {
  try {
    const stripe = await loadStripe(
      'pk_test_51LBEZMEQ4J9XHH9EYQAFt30oLtmj8u74HGW6KDfH0rtIk58QemIOR99DEO0PwlRsRtca5fgNnVa2sKxJ3RtUwERx00TLNjAneJ'
    );
    //   1. Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    //   2. Create checkout form + charge credit card
    const checkoutPageUrl = session.data.session.url;
    window.location.assign(checkoutPageUrl);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
