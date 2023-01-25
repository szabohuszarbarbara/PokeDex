import React from 'react';
import "./CardModal.css";
import "../pokemonList/PokemonList.css";

function PokemonData(props) {
    const setShow = props.setShow
    const pokeData = props.pokeData

    const closeModal = () => {
        setShow(false);
    }

    if (!props.show) { return null; }

    return (
        <div className={"modal-backdrop"} onClick={closeModal}>
            <div className={"modal-container"} onClick={e => e.stopPropagation()}>
                <div className={`stripe ${pokeData.color}`} ></div>
                <div className={"close-modal"} onClick={closeModal}>X</div>
                <div className={"modal-image-container"}>
                    <div className={"modal-image"}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`} alt=""/></div>
                </div>
                <div className={"modal-attributes"}>
                    <div className={"modal-name"}>{pokeData.name.toUpperCase()}</div>
                    <div className="modal-id">#{pokeData.id.toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})}</div>
                    <br/>
                    <div className={"modal-text"}>Type: {pokeData.types[0].type.name} </div>
                    <div className={"modal-text"}>Height: {pokeData.height/10} m</div>
                    <div className={"modal-text"}>Weight: {pokeData.weight/10} kg</div>
                    <div className={"modal-text"}>XP: {pokeData.base_experience}</div>
                    <div className={"modal-text"}>HP: {pokeData.stats[0].base_stat} </div>
                    <div className={"modal-text"}>Attack: {pokeData.stats[1].base_stat} </div>
                    <div className={"modal-text"}>Defense: {pokeData.stats[2].base_stat} </div>
                    <div className={"modal-text"}>Speed: {pokeData.stats[5].base_stat} </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonData;