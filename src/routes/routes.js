const {Router} = require("express")
const productsRoutes = require("./productsRoutes")

const routes = Router()

function indexRoutes() {
    routes.use("/api", productsRoutes())

    return routes
}

module.exports = indexRoutes