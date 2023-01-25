require("dotenv").config();
require("./config/database").connect();

const express = require("express")
const app = express()


const { API_PORT } = process.env;
const port = API_PORT;

const authController = require("./controller/authController")

app.use(express.json());
app.use('/auth', authController);


app.listen(port, () => {
    console.log(`Application started at http://localhost:${port}`)
})


