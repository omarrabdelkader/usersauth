const express = require("express")
const dotenv = require('dotenv')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
const port = 3000
const router = require("./router/userRouter")
const connectDB = require("./config/db")
dotenv.config()
connectDB()

app.use("/api/users", require("./router/userRouter"))

app.listen(port, ()=> {
    console.log(`Server has started at port: ${port}`)
})