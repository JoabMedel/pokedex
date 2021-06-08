import React, {useState,useEffect} from 'react'
import PokeDesignCard from './designPokeCard';
import {getAllPokemon, getPokemon,  getJapaneseName} from './services/pokemon'
import {Img} from '../sourceImage';
import PaginationPokemons from './pagination';
import TransitionsModal from './modalFeatures';
import PuffLoader from "react-spinners/PuffLoader";

export default function FeedPokemons () {
    const [pokemonData, setPokemonData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [load,setload] = useState(true);
    const [toggleFeatures,setToggleFeatures] = useState(false);
    const [detectIndexPoke, setDetectIndex] = useState();
    const PokemonsPerPage = 2;
    const initialURL = 'https://pokeapi.co/api/v2/pokemon'

    useEffect(()=>{
        async function fetchData() {
            let response = await getAllPokemon(`${initialURL}?limit=${PokemonsPerPage}`)
            await loadPokemon(response.results)
        }
        fetchData()
    },[])


    const loadPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon.url)
            let japanName = await  getJapaneseName(pokemonRecord.abilities[0].ability.url)
            pokemonRecord["japanAbiliti"] = japanName;
            return pokemonRecord
        }))
        setPokemonData(_pokemonData);
        setload(false)
    }

    const changePage = (currentPage) => {
        setload(true)
        setCurrentPage(currentPage)
        async function fetchData() {
            let response = await getAllPokemon(`${initialURL}?limit=${PokemonsPerPage}&offset=${(currentPage-1)*2}`)
            await loadPokemon(response.results)
        }
        fetchData()
    }

    const togglePokeFeatures = () => {
        return setToggleFeatures(!toggleFeatures)
    }

    const showPokeFeatures = () => {
        if(toggleFeatures){
            return <TransitionsModal 
                    offFeature={togglePokeFeatures}
                    namePokemon={pokemonData[detectIndexPoke].name}
                    imagePokemon={Img[detectIndexPoke+(currentPage-1)*2].image}
                    typePokemon={pokemonData[detectIndexPoke].types}
                    stats={pokemonData[detectIndexPoke].stats}
                    abilitiesPokemon={pokemonData[detectIndexPoke].abilities}
                    japanText={pokemonData[detectIndexPoke].japanAbiliti}
            />
        }
    }
    

    return(
        <> 
            {
                    load ? <PuffLoader/> : (
                        <>
                        {showPokeFeatures()}
                           <div className="containerAllCards">
                               {
                                 pokemonData.map((pokemon,index) => {
                                     return(
                                            <PokeDesignCard
                                            namePokemon={pokemon.name}
                                            key={index}
                                            imagePokemon={Img[index+(currentPage-1)*2].image}
                                            type={pokemon.types[0].type.name}
                                            numberPokemon={pokemon.id}
                                            Height={pokemon.height}
                                            weight={pokemon.weight}
                                            colorPokemon={pokemon.types[0].type.name}
                                            japanAbiliti = {pokemon.japanAbiliti}
                                            showFeatures = {()=>togglePokeFeatures(setDetectIndex(index))}
                                            />
                                     )
                                 })  
                               }
                           </div>
                           <div className="pagination-container">
                                <PaginationPokemons
                                changePag = {changePage}
                                statepage = {currentPage}
                                />
                         </div>
                        </>
                    )
                }
        </>
    )
}