import {useEffect, useState} from "react";
import axios from "axios";
import PokemonData from "../pokemonData/PokemonData";
import "./Header.css"

function SearchPokemon() {
    const [show, setShow] = useState(false)
    const [pokemonName, setPokemonName] = useState("")
    const [pokeData, setPokeData] = useState([])

    const handleNameChange = (event => {
        event.preventDefault();
        setPokemonName(event.target.value.toLowerCase());
    })

    const searchPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(async result => {
                const pData = result.data
                    pData.color = await getPokeColor(result.data.species.url)
                    setPokeData(pData);
                    setPokemonName("")
                    setShow(true)
                }
            )
            .catch(function (error) {
                console.log(error);
            })
    }

    const getPokeColor = async (url) => {
        try {
            const result = await axios.get(url)
            return result.data.color.name
        } catch(error) {
            return error
        }
    }

    if (show) {
        return (
        <PokemonData show={show} setShow={setShow} pokeData={pokeData}/>
        )
    }

    return (
        <>
            <div className={"search-box"}>
                <input type="text" value={pokemonName} onChange={ (event) => handleNameChange(event) }></input>
                <button onClick={searchPokemon}>Search Pokemon</button>
            </div>
        </>
    );
}

export default SearchPokemon;