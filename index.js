const express = require('express')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {
  res.send('xin chao!')
})

app.listen(port, () => {
  console.log(`App listening on port http:localhost:${port}`)
})
