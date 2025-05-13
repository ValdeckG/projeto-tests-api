const {Router} = require("express")
const productsController = require("../controllers/productsController").default

const routes = Router()

function productsRoutes(){
    routes.post("/product", productsController.create)
    routes.get("/product", productsController.getAll)
    routes.put("/product/:id", productsController.update)
    routes.delete("/product/:id", productsController.destroy)
    
    return routes
}

module.exports = productsRoutes