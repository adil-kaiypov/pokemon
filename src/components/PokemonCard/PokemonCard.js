import React from 'react'

const PokemonCard = ({ pokemon }) => {
  return (
    <div className='pokemonCard'>
      {pokemon.name}
      <img className='pokemonImage' src = {pokemon.spriteUrl}/>
    </div>
  )
}

export default PokemonCard