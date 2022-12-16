const express = require('express')
const router = express.Router()

const productRouter = require('./product.router')

router.use('/api/v1/products', productRouter)

module.exports = router


