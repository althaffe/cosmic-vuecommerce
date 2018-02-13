import Vue from 'vue';
import VueStripeCheckout from 'vue-stripe-checkout';

const options = {
  key: process.env.STRIPE_PUBLIC_KEY,
  image: 'https://cdn.meme.am/images/100x100/15882140.jpg',
  locale: 'auto',
  currency: 'USD',
  billingAddress: true,
  panelLabel: 'Pay {{amount}}'
}

Vue.use(VueStripeCheckout, options);
