const express = require('express')

/* controller */
const productController = require('../controllers/product.controller')

const router = express.Router()

router.get('/', productController.getAll)                 
router.get('/:id([0-9]+)', productController.getOne)      
router.delete('/:id([0-9]+)', productController.delete) 

module.exports = router