const express = require('express')
const app = express()
const authRoutes = require("./Routes/auth-router")

const port = 3000

//Middleware for json reading
app.use(express.json())

// Mount the router at the root path
app.use('/authRoutes', authRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
