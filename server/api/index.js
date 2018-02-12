const { Router } = require('express')
const router = Router()

router.use('/', function() {
  console.log(process.env.COSMIC_BUCKET)
})

module.exports = router
