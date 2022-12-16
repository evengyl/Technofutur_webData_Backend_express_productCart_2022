const dbConnect = require("./db").get()

const CartModel = {

    getAll : () => {
        return dbConnect.then((conn) => {
            return conn.query(`SELECT * FROM carts`).then((allCarts) => {
                if(allCarts)
                {
                    allCarts.foreach((cart) => {
                        return conn.query("select * from productsCarts where cartId = ?", [cart.id]).then((res) => {
                            cart.listProducts = res
                        })
                    })
                }
            })
        })
    },

    getOne : (id) => {
        return dbConnect.then((conn) => {
            return conn.query('SELECT * FROM carts as c JOIN productsCarts as pc ON c.id = pc.cartId WHERE c.id = ?', [id])
        })
    },


    create : (name) => {
        return dbConnect.then((conn) => {
            return conn.query("Insert into carts (name) values (?)", [name])
        })
    },

    addProductCart : (cartId, productId, currentPrice, qty) => {
        return dbConnect.then((conn) => {
            return conn.query("Insert into productsCarts (cartId, productId, currentPrice, qty) values (?, ?, ?, ?", [cartId, productId, currentPrice, qty])
        })
    },
    
    delete : (id) => { 
        return dbConnect.then((conn) => {
            return conn.query("DELETE from carts where id = ?", [id])
        })
    }
}

module.exports = CartModel