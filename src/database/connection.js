const mongoose = require("mongoose")
require("dotenv").config()

const mongoURL = process.env.MONGODB_URL.replace("username", process.env.MONGODB_USERNAME).replace("password", process.env.MONGODB_PASS)


async function connection() {
    const connect = await mongoose.connect(mongoURL)
    console.log("mongoDB connect");
    return connect
}

module.exports = connection