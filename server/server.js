
const express = require("express")
const app = express()


const port = 3000

app.get("/", (req, res) => {
    res.status(200).json("Hello")
    })

app.listen(port, () => {
    console.log(`Application started at http://localhost:${port}`)
})


