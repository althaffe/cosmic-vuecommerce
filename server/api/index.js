const { Router } = require('express')
const router = Router()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cosmic = require('../../plugins/cosmic')

router.post('/charge', (req, res) => {
  let { token, email, name, address, city, amount, items } = req.body
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
    let content = ''
    items.forEach(item => {
      content+= `${item.title} x ${item.count}, `
    })
    const params = {
      type_slug: 'orders',
      title: name,
      content: content,
      metafields: [
        {
          key: 'Address',
          type: 'text',
          value: address
        },
        {
          key: 'City',
          type: 'text',
          value: city
        }
      ]
    }
    cosmic.addObject(params).then(data => {
      console.log(data)
      res.json({success: true})
    }).catch(err => {
      console.log(err)
    })
  }).catch(function(err) {
    console.log(err)
  });
})

module.exports = router
