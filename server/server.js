require("dotenv").config();
require("./config/database").connect();

const express = require("express")
const app = express()

const { API_PORT } = process.env;
const port = API_PORT;

app.get("/", (req, res) => {
    res.status(200).json("Hello")
    })

app.listen(port, () => {
    console.log(`Application started at http://localhost:${port}`)
})


