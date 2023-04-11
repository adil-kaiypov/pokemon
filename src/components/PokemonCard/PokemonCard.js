import React, { useEffect, useState } from 'react'
import { BASE_URL, fetchPokemonId } from 'api/fetchPokemons';
const PokemonCard = ({ pokemon, gen }) => {
  const [ imgURL, setImgURL ] = useState();
  useEffect(() => {
    if(gen == 0){
      fetchPokemonId(pokemon.url)
      .then((pokemon) => setImgURL(pokemon.sprites.front_default)
      );
    }else{
      fetchPokemonId(pokemon.url)
      .then((pokemon) => fetchPokemonId(getPokemonUrl(pokemon.id))
      .then((pokemon) => setImgURL(pokemon.sprites.front_default))
      );
     }
  }, []);
  
  console.log(imgURL, 'url')
  const getPokemonUrl = (id) => {
    return BASE_URL + '/pokemon/' + id;
  };

  return (
    <div className='pokemonCard'>
      <h3>{pokemon.name}</h3>
      <img className='pokemonImage' src = {imgURL}/>
    </div>
  )
}

export default PokemonCard