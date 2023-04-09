import { fetchPokemonByName } from "api/fetchPokemons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonInfo = () =>{
    const { name } = useParams();

    const [pokemonInfo, setPokemonInfo] = useState();
    useEffect(() => {
        fetchPokemonByName(name)
        .then((pokemon) => setPokemonInfo(pokemon))
    }, [pokemonInfo])
    console.log(pokemonInfo)
    return(
        <div className="pokemonInfo">
            <h1>{name}</h1>
            <br />
            {pokemonInfo && (
                <div className="stats">
                    <h2>Stats:</h2>
                    <div className="stats__inner">
                        {pokemonInfo.stats.map(stat => <h3>{stat.stat.name} - {stat.base_stat}</h3>)}                
                    </div>
                </div>
            )}
            <br />
            <h2>Forms:</h2>
            <br />
            <div className="pokemonForms">
                {pokemonInfo && (
                <div >
                    <h2 className="formOf">Default form of {pokemonInfo.name}</h2>
                    <br />
                    <div className="defaultForm">
                        <div className="malePokemon">
                            <h3>Male</h3>
                            <img src={pokemonInfo.sprites.front_default} alt="picture of male pokemon"/>
                        </div>
                        <div className="femalePokemon">
                            <h3>Female</h3>
                            {pokemonInfo.sprites.front_female ? (
                            <img src={pokemonInfo.sprites.front_female} />
                            ) : (
                                <h5>No female version</h5>
                            )}  
                        </div>
                    </div>
                </div>
                )}
                <div className="column"></div>
                {pokemonInfo && (
                <div>
                    <h2 className="formOf">Shiny form of {pokemonInfo.name}</h2>
                    <br />
                    <div className="shinyForm">
                        <div className="malePokemon">
                            <h3>Male</h3>
                            <img src={pokemonInfo.sprites.front_shiny} alt="picture of male pokemon"/>
                        </div>
                        <div className="femalePokemon">
                            <h3>Female</h3>
                            {pokemonInfo.sprites.front_female ? (
                            <img src={pokemonInfo.sprites.front_shiny_female} />
                            ) : (
                                <h5>No female version</h5>
                            )}  
                        </div>
                    </div>
                </div>
                )}
            </div>
            {pokemonInfo && (
                <div className="abilities">
                    <br />
                    <h2>Abilities of {pokemonInfo.name}</h2>
                    <br />
                    {pokemonInfo.abilities.map(ability => <li>{ability.ability.name}</li>) }    
                </div>
                )}
            
        </div>
    ) 
    
}

export default PokemonInfo;