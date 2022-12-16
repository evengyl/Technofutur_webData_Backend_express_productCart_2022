const express = require('express')

/* controller */
const cartController = require('../controllers/cart.controller')

const router = express.Router()

router.get('/', cartController.getAll)                 
router.delete('/:id([0-9]+)', cartController.delete)
router.post("/", cartController.createCart, cartController.addProductToCart)

module.exports = router