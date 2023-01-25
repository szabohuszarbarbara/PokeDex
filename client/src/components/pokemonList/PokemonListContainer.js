import React, {useEffect, useState} from 'react';
import axios from "axios";
import PokemonListItem from "./PokemonListItem";
import Pagination from "../pagination/Pagination";

function PokemonListContainer() {
    const [pokeList, setPokeList] = useState([]);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [prevUrl, setPrevUrl] = useState("")
    const [nextUrl, setNextUrl] = useState("")

    useEffect(   () => {
        setPokeList([])
        getData();
    }, [url])

    const getData = () => {
        axios.get(url).then(result => {
            setPrevUrl(result.data.previous)
            setNextUrl(result.data.next)
            const resultList = result.data.results
            const urls = resultList.map(p => p.url)
            getPokeList(urls);
/*            localStorage.setItem("data", JSON.stringify(pokeList))*/
        })
            .catch(function (error) {
                console.log(error);
            })
    }

    const getPokeList = (urls) => {
        urls.map( async url => await axios.get(url).then(async result => {

            const pData = result.data
            pData.color = await getPokeColor(result.data.species.url)

            setPokeList(
                state => {
                    state = [...state, pData]
                    state.sort((a, b) => a.id > b.id ? 1 : -1)
                    return state
                }
            );
        })
            .catch(function (error) {
                console.log(error);
            }))
    }

    const getPokeColor = async (url) => {
        try {
            const result = await axios.get(url)
            return result.data.color.name
        } catch(error) {
            return error
        }
    }
    const goToPrevPage = () => {
        setUrl(prevUrl)
    }

    const goToNextPage = () => {
        setUrl(nextUrl)
    }

    return (
        <>
            <Pagination goToPrevPage={ prevUrl ? goToPrevPage : null} goToNextPage={nextUrl ? goToNextPage : null}/>
            <PokemonListItem pokeList={pokeList} />
        </>
    );
}

export default PokemonListContainer;