import "./PokemonList.css";
import PokemonData from "../pokemonData/PokemonData";
import {useState} from "react";

export default function PokemonListItem({ pokeList}) {

    const [show, setShow] = useState(false);
    const [pokeData, setPokeData] = useState([])

    const openModal = (data) => {
        setPokeData(data)
        setShow(true);
     }

    return (
        <>
            <div className="card-container">
            {pokeList.map(p => (
                <div className={`card ${p.color}`} key={p.id} onClick={ () => openModal(p) }
                >
                    <div className={"card-image"}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} alt=""/></div>
                    <div className={"card-id"}>#{p.id.toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})}</div>
                    <div className={"card-tag"}>
                        <div className={"card-name"}>{p.name.toUpperCase()}</div>
                    </div>
                </div>
            )
            )}
                <PokemonData show={show} setShow={setShow} pokeData={pokeData}/>
            </div>
        </>
    )
}