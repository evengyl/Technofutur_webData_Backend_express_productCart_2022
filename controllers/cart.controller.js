const CartModel = require("../models/cart.model")

//add post and update
const cartController = {

    getAll : (req, res) => {

        CartModel.getAll().then((datas) => {
            res.status(200).json(datas)
        })
    },

    createCart : (req, res, next) => {

        CartModel.create(req.body.nameCart).then((result) => {
            res.locals.idCartCreated = result.insertId
            next()
        })
        .catch((error) => {
            res.status(500).json({ message : error.sqlMessage})
        })
    },

    addProductToCart : (req, res) => {
        
        if(req.body.cart)
        {
            let cartId = res.locals.idCartCreated
            let cart = req.body.cart

            if(cart[0] != undefined)
            {
                cart.forEach((product) => {
                    CartModel.addProductCart(cartId, product.productId, product.qty)
                    .then(_ => {})
                    .catch((error) => {
                        res.status(500).json({ message : error.sqlMessage})
                    })
                })

                res.status(201).json({ idCart : cartId})
            }

        }
/*
        */
    },

    delete : (req, res) => {

        CartModel.getOne(req.params.id).then((oldProduct) => {
            if(oldProduct[0])
            {
                ProductModel.delete(id)
                .then((datas) => {
                    res.status(200).json({ message : "product deleted"})
                })
            }
            else
            {
                res.status(404).json({ message : "product not found"})
            }
        })
    },
}


module.exports = cartController