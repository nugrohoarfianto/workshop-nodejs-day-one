const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors({
    origin: 'localhost:5500'
}))

app.get('/', (req, res) => {
    res.json({message: 'Howdy from the server'})
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})