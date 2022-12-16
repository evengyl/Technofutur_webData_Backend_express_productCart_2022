const ProductModel = require("../models/product.model")


const productController = {


    getAll : (req, res) => {

        ProductModel.getAll().then((datas) => {
            res.status(200).json(datas)
        })
    },


    getOne : (req, res) => {

        ProductModel.getOne(req.params.id)
        .then((oneProduct) => {

            if(oneProduct[0])
            {
                res.status(200).json(oneProduct)
            }
            else
            {
                res.status(404).json({ message : "product not found"})
            }
        })
    },



    delete : (req, res) => {

        let id = req.params.id

        ProductModel.getOne(id).then((oldProduct) => {
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