import React, { useEffect, useState } from 'react'
import { fetchPokemonId } from 'api/fetchPokemons';
const PokemonCard = ({ pokemon }) => {
  const [ imgURL, setImgURL ] = useState();
  useEffect(() => {
    fetchPokemonId(pokemon.url)
    .then((pokemon) => setImgURL(pokemon.sprites.other.dream_world.front_default));
  }, [pokemon.url]);
  return (
    <div className='pokemonCard'>
      <h3>{pokemon.name}</h3>
      <img className='pokemonImage' src = {imgURL}/>
    </div>
  )
}

export default PokemonCard