require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")

const dbConnection = require("./models/db")
dbConnection.connect()

const port = process.env.PORT || process.env.PORT_LOCAL
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use(cors())

const router = require('./routers/router')
app.use(router)

app.all("*", (req, res) => { res.status(404).json({message : "404 : url incorrecte"})})

app.listen(port, console.log("server démarré"))