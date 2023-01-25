const express = require("express")
const app = express()

app.get("/", (req, res) => {

})

const pokemonRouter = require('./routes/pokemons')

app.use('/pokemons', pokemonRouter)

app.listen(3000)


