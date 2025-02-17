require("dotenv").config();
const express = require('express')
const cors = require('cors');
const app = express()
const authRoutes = require("./Routes/auth-router")
const contactRoute = require("./Routes/contact-router");
const connectDB = require('./utils/db');
const errorHandler = require("./middleware/error-middleware");

const PORT = process.env.PORT || 3000

//handling cors policiy
const corsOptions = {
  origin: 'http://localhost:5173',
  method: "GET, POST, PUT, PATCH, DELETE, HEAD",
  credentials:true,
}
app.use(cors(corsOptions))

//Middleware for json reading
app.use(express.json())


// Mount the router at the root path
app.use('/api/users', authRoutes)
app.use('/api/form', contactRoute)

// Connect to MongoDB Atlas
connectDB();

// Global Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
