const cors = require("cors")
const express = require("express")
const connection = require("./database/connection")
require("dotenv").config()
const indexRoutes = require("./routes/routes")


const app = express()

const port = process.env.PORT || 3333

app.use(cors())

app.use(express.json())

app.use(express.text())

app.use(express.urlencoded({extended: true}))

app.use(indexRoutes())

app.listen(port, async () => {
    console.log("server started");   
    await connection()
})