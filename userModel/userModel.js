const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "please provide us with an password"],
        min: 6
    },
    email: {
        type: String,
        require: [true, "please provide us with an email"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "please provide us with an password"],
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)