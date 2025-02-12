require("dotenv").config();
const express = require('express')
const app = express()
const authRoutes = require("./Routes/auth-router")
const connectDB = require('./utils/db');
const errorHandler = require("./middleware/error-middleware");

const port = 3000

//Middleware for json reading
app.use(express.json())

// Mount the router at the root path
app.use('/authRoutes', authRoutes)

// Connect to MongoDB Atlas
connectDB();

// Global Error Handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
