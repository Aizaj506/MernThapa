require("dotenv").config();
const express = require('express')
const app = express()
const authRoutes = require("./Routes/auth-router")
const connectDB = require('./utils/db')

const port = 3000

//Middleware for json reading
app.use(express.json())

// Mount the router at the root path
app.use('/authRoutes', authRoutes)

// Connect to MongoDB Atlas
connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
