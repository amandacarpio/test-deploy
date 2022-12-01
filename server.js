require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4321

app.get('/', (req, res) => {
    res.send(`hello world i am listening to ${PORT}`)
})

app.get('/dburl', (req, res) => {
    res.send(`My connection strong is: ${process.env.DATABASE_URL}`)
})

app.listen(PORT, () => {
    console.log(`All Good on port ${PORT}`)
})