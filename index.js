const express = require('express')
const axios = require('axios')
// const { response } = require("express")

const app = express()
const port = 3000

app.get('/get/list', async (req, res) => {
  axios.get('https://api.github.com/search/repositories?q=created:%3E2021-03-01&sort=stars&order=desc?per_page=100')
    .then(result => {
      res.send(result.data.items[2].language)
    })
})

app.listen(port, () => {
  console.log(`This app is running on port ${port}`)
})
