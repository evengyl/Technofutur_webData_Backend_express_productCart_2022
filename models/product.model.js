const dbConnect = require("./db").get()

const ProductModel = {

    getAll : () => {
        return dbConnect.then((conn) => {
            return conn.query(`SELECT * FROM products`)
        })
    },

    getOne : (id) => {
        return dbConnect.then((conn) => {
            return conn.query('SELECT * FROM products WHERE id = ?', [id])
        })
    },
    
    delete : (id) => { 
        return dbConnect.then((conn) => {
            return conn.query("DELETE from products where id = ?", [id])
        })
    }
}

module.exports = ProductModel