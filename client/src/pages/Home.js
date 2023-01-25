import React from 'react';
import PokemonListContainer from "../components/pokemonList/PokemonListContainer";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Home(props) {
    return (
        <div>
            <Header/>
            <PokemonListContainer />
            <Footer/>
        </div>
    );
}

export default Home;