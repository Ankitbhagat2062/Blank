const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.query)
  res.send('Hello World! '+ req.query.name)
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.get('/contact', (req, res) => {
  res.send('Welcome to Contact Section!')
})
app.get('/Profile', (req, res) => {
  res.send('Welcome to Profile Section!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})