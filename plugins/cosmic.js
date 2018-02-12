const Cosmic = require('cosmicjs')()

const bucket = Cosmic.bucket({
  slug: process.env.COSMIC_BUCKET,
  read_key: process.env.COSMIC_READ_KEY,
  write_key: process.env.COSMIC_WRITE_KEY
})

export default bucket
