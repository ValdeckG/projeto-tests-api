const {Schema, model} = require("mongoose")

const productsSchema = new Schema(
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        brand: {type: String, required: true},
        version: {type: String, required: true},
    }, {
        timestamps: true
    }
)

const Product = model("Product", productsSchema)


module.exports = Product