const express = require('express')

const app = express()
const port = 3000

const router = require('./routes/getListRoutes')

app.use(router)

app.listen(port, () => {
  console.log(`This app is running on port ${port}`)
})

module.exports = app
