const express = require('express')
const router = express.Router()

const productRouter = require('./product.router')
const cartRouter = require('./cart.router')

router.use('/api/v1/products', productRouter)
router.use('/api/v1/carts', cartRouter)

module.exports = router


