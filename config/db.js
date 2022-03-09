const mongoose = require("mongoose")

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONG_CON)
        console.log(`MongoDB is connected ${conn.connection.host}..`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB