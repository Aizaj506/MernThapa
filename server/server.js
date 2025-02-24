require("dotenv").config();
const express = require('express')
const cors = require('cors');
const app = express()
const authRoutes = require("./Routes/auth-router")
const contactRoute = require("./Routes/contact-router");
const serviceRoute = require("./Routes/service-router");
const adminRoutes = require("./Routes/admin-router");
const connectDB = require('./utils/db');
const errorHandler = require("./middleware/error-middleware");

const PORT = process.env.PORT || 5000

//handling cors policiy
const corsOptions = {
  origin: 'http://localhost:5173',
  method: "GET, POST, PUT, PATCH, DELETE, HEAD",
  credentials:true,
}
app.use(cors(corsOptions))

//Middleware for json reading
app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});


// Mount the router at the root path
app.use('/api/users', authRoutes)
app.use('/api/connect', contactRoute)
app.use('/api/data', serviceRoute)
app.use('/api/admin', adminRoutes)

// Connect to MongoDB Atlas
connectDB();

// Global Error Handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));