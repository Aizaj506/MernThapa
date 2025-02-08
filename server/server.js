const express = require('express')
const app = express()
const authRoutes = require("./Routes/auth-router")

const port = 3000

// Mount the router at the root path
app.use('/authRoutes', authRoutes)

// app.get('/', (req, res) => {
//   res.send('Hello Aizaj and Riyajjjjj!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
