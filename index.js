const express = require('express')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {

  res.send('Hello thanh bm')


})

app.listen(port, () => {
  console.log(`app listening on port http:localhost:${port}`)
})
