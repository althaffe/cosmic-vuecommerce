const { Router } = require('express')
const router = Router()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cosmic = require('../../plugins/cosmic')

router.post('/charge', (req, res) => {
  let { token, email, name, address, city, amount } = req.body
  stripe.customers.create({
    email: email
  }).then(function(customer){
    return stripe.customers.createSource(customer.id, {
      source: token
    });
  }).then(function(source) {
    return stripe.charges.create({
      amount: amount,
      currency: 'usd',
      customer: source.customer
    });
  }).then(function(charge) {
    console.log(amount)
    res.json({success: true})
  }).catch(function(err) {
    console.log(err)
  });
})

module.exports = router
