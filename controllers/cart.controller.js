const CartModel = require("../models/cart.model")

//add post and update
const cartController = {

    getAll : (req, res) => {

        CartModel.getAll().then((datas) => {
            res.status(200).json(datas)
        })
    },

    createCart : (req, res) => {

        CartModel.create(req.body.name).then((result) => {
            res.status(201).json({ id : result.insertId})
        })
        .catch((error) => {
            res.status(500).json({ message : error.sqlMessage})
        })
    },

    addProductToCart : (req, res) => {
        CartModel.addProduct(cartId, productId, currentPrice, qty).then((result) => {
            res.status(201).json({ id : result.insertId})
        })
        .catch((error) => {
            res.status(500).json({ message : error.sqlMessage})
        })
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


module.exports = productController